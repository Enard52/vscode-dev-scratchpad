# Dev Scratchpad for VS Code 📝

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/Enard52.dev-scratchpad?color=blue&label=VS%20Marketplace)](https://marketplace.visualstudio.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A lightning-fast, persistent scratchpad right inside VS Code. 

Stop cluttering your workspace with unsaved `Untitled-1`, `Untitled-2` tabs. Dev Scratchpad gives you a permanent canvas for temporary code snippets, JSON payloads, curl commands, and thoughts that **persist across VS Code restarts**.

---

## ✨ Features

- ⚡ **Instant Access**: Open with a single shortcut (`Ctrl + Alt + N` / `Cmd + Alt + N`).
- 💾 **Auto-Persistent**: Automatically saved in the background. Close VS Code or switch projects without losing a single character.
- 🎨 **Markdown & Code Highlighting**: Supports markdown formatting and code blocks out of the box.
- 🧹 **One-Click Clear**: Clean your canvas anytime via Command Palette.

---

## ⌨️ Shortcuts

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Open Scratchpad** | `Ctrl + Alt + N` | `Cmd + Alt + N` |
| **Clear Scratchpad** | `Ctrl + Shift + P` → `Clear Scratchpad` | `Cmd + Shift + P` → `Clear Scratchpad` |

---

## 📦 How to Publish / Install Locally

To package and test locally:
```bash
npx @vscode/vsce package
code --install-extension dev-scratchpad-1.0.0.vsix
```

To publish to the VS Code Marketplace:
```bash
npx @vscode/vsce publish
```

---

## License

MIT © [Enard52](https://github.com/Enard52)
