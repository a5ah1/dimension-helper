# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.1] - 2025-11-18

### Changed
- Optimized JavaScript by consolidating duplicate keydown event listeners into single listener
- Refactored input event listeners to use shared helper function, reducing code duplication
- Added section comments to CSS for better code organization and maintainability
- Updated Open Graph URL metadata to use correct GitHub Pages URL

### Added
- Added Lucide icons acknowledgment to README
- Added desktop/laptop usage notice to help modal and README

## [0.9.0] - 2025-11-18

### Added
- Initial release of Dimension Helper
- Interactive dimension calculator with visual preview
- Customizable increment (default: 64)
- Width and height unit controls
- Real-time aspect ratio calculation (simplified and decimal formats)
- Grid overlay showing unit divisions
- Keyboard shortcuts for quick adjustments (arrow keys)
- LocalStorage persistence for settings
- Reset button to restore defaults
- Help modal with documentation
- Dark theme with custom color palette
- Responsive design for mobile devices
- GitHub Pages deployment workflow

### Features
- **Visual Preview**: Proportionally scaled rectangle with grid overlay
- **Aspect Ratios**: Displays both simplified (16:9) and decimal (1.78) formats
- **Keyboard Controls**: Arrow keys adjust dimensions when inputs not focused
- **Auto-Save**: Settings automatically saved to localStorage
- **Modal Help**: Comprehensive keyboard shortcuts and usage documentation
- **Icons**: Lucide icons for UI elements

### Technical
- Pure vanilla JavaScript (no frameworks)
- CSS Grid/Flexbox layout
- SVG for icons and grid rendering
- No build process required
- GitHub Actions for automated deployment

[Unreleased]: https://github.com/a5ah1/dimension-helper/compare/v0.9.1...HEAD
[0.9.1]: https://github.com/a5ah1/dimension-helper/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/a5ah1/dimension-helper/releases/tag/v0.9.0
