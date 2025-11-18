const incrementInput = document.getElementById('increment');
const widthUnitsInput = document.getElementById('width-units');
const heightUnitsInput = document.getElementById('height-units');
const dimensionsOutput = document.getElementById('dimensions-output');
const ratioOutput = document.getElementById('ratio-output');
const previewRectangle = document.getElementById('preview-rectangle');
const dimensionLabel = document.getElementById('dimension-label');
const gridOverlay = document.getElementById('grid-overlay');
const previewArea = document.getElementById('preview-area');
const resetButton = document.getElementById('reset-btn');
const helpButton = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeModalButton = document.getElementById('close-modal');

// Default values
const DEFAULTS = {
    increment: 64,
    widthUnits: 16,
    heightUnits: 16
};

// LocalStorage functions
function saveToStorage() {
    localStorage.setItem('dimensionHelper_increment', incrementInput.value);
    localStorage.setItem('dimensionHelper_widthUnits', widthUnitsInput.value);
    localStorage.setItem('dimensionHelper_heightUnits', heightUnitsInput.value);
}

function loadFromStorage() {
    const savedIncrement = localStorage.getItem('dimensionHelper_increment');
    const savedWidth = localStorage.getItem('dimensionHelper_widthUnits');
    const savedHeight = localStorage.getItem('dimensionHelper_heightUnits');

    if (savedIncrement) incrementInput.value = savedIncrement;
    if (savedWidth) widthUnitsInput.value = savedWidth;
    if (savedHeight) heightUnitsInput.value = savedHeight;
}

function resetToDefaults() {
    incrementInput.value = DEFAULTS.increment;
    widthUnitsInput.value = DEFAULTS.widthUnits;
    heightUnitsInput.value = DEFAULTS.heightUnits;
    saveToStorage();
    updatePreview();
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function calculateAspectRatio(width, height) {
    const divisor = gcd(width, height);
    const ratioW = width / divisor;
    const ratioH = height / divisor;
    const decimalRatio = (width / height).toFixed(2);
    return `${ratioW}:${ratioH} (${decimalRatio})`;
}

function updatePreview() {
    const increment = parseInt(incrementInput.value) || 64;
    const widthUnits = parseInt(widthUnitsInput.value) || 1;
    const heightUnits = parseInt(heightUnitsInput.value) || 1;

    const actualWidth = widthUnits * increment;
    const actualHeight = heightUnits * increment;

    // Update outputs
    dimensionsOutput.textContent = `${actualWidth} × ${actualHeight}`;
    ratioOutput.textContent = calculateAspectRatio(widthUnits, heightUnits);
    dimensionLabel.textContent = `${actualWidth} × ${actualHeight}`;

    // Calculate preview size
    const containerMaxWidth = previewArea.clientWidth * 0.9;
    const containerMaxHeight = previewArea.clientHeight * 0.9;
    const aspectRatio = actualWidth / actualHeight;

    let previewWidth, previewHeight;

    if (containerMaxWidth / containerMaxHeight > aspectRatio) {
        previewHeight = containerMaxHeight;
        previewWidth = previewHeight * aspectRatio;
    } else {
        previewWidth = containerMaxWidth;
        previewHeight = previewWidth / aspectRatio;
    }

    previewRectangle.style.width = `${previewWidth}px`;
    previewRectangle.style.height = `${previewHeight}px`;

    // Update grid overlay
    drawGrid(previewWidth, previewHeight, widthUnits, heightUnits);
}

function drawGrid(width, height, widthUnits, heightUnits) {
    gridOverlay.setAttribute('width', width);
    gridOverlay.setAttribute('height', height);
    gridOverlay.innerHTML = '';

    const cellWidth = width / widthUnits;
    const cellHeight = height / heightUnits;

    // Draw vertical lines
    for (let i = 1; i < widthUnits; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', i * cellWidth);
        line.setAttribute('y1', 0);
        line.setAttribute('x2', i * cellWidth);
        line.setAttribute('y2', height);
        line.classList.add('grid-line');
        gridOverlay.appendChild(line);
    }

    // Draw horizontal lines
    for (let i = 1; i < heightUnits; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', 0);
        line.setAttribute('y1', i * cellHeight);
        line.setAttribute('x2', width);
        line.setAttribute('y2', i * cellHeight);
        line.classList.add('grid-line');
        gridOverlay.appendChild(line);
    }
}

// Event listeners for inputs
incrementInput.addEventListener('input', () => {
    updatePreview();
    saveToStorage();
});
widthUnitsInput.addEventListener('input', () => {
    updatePreview();
    saveToStorage();
});
heightUnitsInput.addEventListener('input', () => {
    updatePreview();
    saveToStorage();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts if user is editing an input field
    if (document.activeElement.tagName === 'INPUT') return;

    let handled = false;

    switch(e.key) {
        case 'ArrowLeft':
            // Decrease width
            widthUnitsInput.value = Math.max(1, parseInt(widthUnitsInput.value) - 1);
            handled = true;
            break;
        case 'ArrowRight':
            // Increase width
            widthUnitsInput.value = parseInt(widthUnitsInput.value) + 1;
            handled = true;
            break;
        case 'ArrowUp':
            // Increase height
            heightUnitsInput.value = parseInt(heightUnitsInput.value) + 1;
            handled = true;
            break;
        case 'ArrowDown':
            // Decrease height
            heightUnitsInput.value = Math.max(1, parseInt(heightUnitsInput.value) - 1);
            handled = true;
            break;
    }

    if (handled) {
        e.preventDefault();
        updatePreview();
        saveToStorage();
    }
});

// Reset button
resetButton.addEventListener('click', resetToDefaults);

// Help modal
helpButton.addEventListener('click', () => {
    helpModal.classList.add('show');
});

closeModalButton.addEventListener('click', () => {
    helpModal.classList.remove('show');
});

// Close modal on outside click
helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) {
        helpModal.classList.remove('show');
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && helpModal.classList.contains('show')) {
        helpModal.classList.remove('show');
    }
});

// Handle window resize
window.addEventListener('resize', updatePreview);

// Initial setup
loadFromStorage();
updatePreview();
