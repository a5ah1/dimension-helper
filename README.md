# Dimension Helper

A visual tool for calculating and previewing image dimensions in customizable increments. Perfect for working with image sizes that need to be multiples of specific values (like 64 for certain AI models or video codecs).

🔗 **[Live Demo](https://a5ah1.github.io/dimension-helper/)**

## Features

- **Interactive Preview**: Real-time visual representation of dimensions with proportional scaling
- **Grid Overlay**: See exactly how many units divide your image
- **Customizable Increment**: Default is 64, but use any value that suits your needs
- **Aspect Ratio Display**: Shows both simplified (16:9) and decimal (1.78) ratios
- **Keyboard Shortcuts**: Quick adjustment using arrow keys
- **Auto-Save**: Settings persist across page refreshes using localStorage
- **Dark Theme**: Eye-friendly dark interface with custom color palette

## Usage

### Basic Controls

1. **Increment**: Set your base unit (e.g., 64 for AI models)
2. **Width Units**: Number of increments horizontally
3. **Height Units**: Number of increments vertically

The tool automatically calculates:
- Final dimensions (Width Units × Increment, Height Units × Increment)
- Simplified aspect ratio (e.g., 16:9, 4:3, 1:1)
- Decimal aspect ratio (e.g., 1.78)

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Decrease width by 1 unit |
| `→` | Increase width by 1 unit |
| `↑` | Increase height by 1 unit |
| `↓` | Decrease height by 1 unit |
| `Esc` | Close help modal |

**Note**: Keyboard shortcuts work when input fields are not focused.

### Reset Button

Click the power icon (leftmost button in toolbar) to reset all values to defaults:
- Increment: 64
- Width Units: 16
- Height Units: 16

## Common Use Cases

- **AI Image Generation**: Many models require dimensions divisible by 64 or 8
- **Video Encoding**: Codecs often need dimensions divisible by 16
- **Texture Design**: Game engines may require power-of-2 or specific multiples
- **Responsive Design**: Quickly preview different aspect ratios

## Local Development

This is a simple static site with no build process required.

```bash
# Clone the repository
git clone https://github.com/a5ah1/dimension-helper.git
cd dimension-helper

# Open in browser
open index.html

# Or serve locally with Python
python3 -m http.server 8000
# Then open http://localhost:8000
```

## Technology Stack

- Pure HTML5, CSS3, and vanilla JavaScript
- No frameworks or dependencies
- Uses localStorage API for persistence
- SVG for icons and grid overlay

## Browser Support

Works in all modern browsers that support:
- CSS Grid/Flexbox
- localStorage
- SVG
- ES6 JavaScript

## License

MIT License - Feel free to use and modify as needed.

## Contributing

Issues and pull requests are welcome! Feel free to suggest features or report bugs.

---

**Version**: 0.9.0
