# Canvas Drawing Application

## Overview

This project is a simple canvas drawing application built with React and TypeScript. It allows users to draw, erase, and add text to a canvas using a set of tools. The application is structured using SOLID principles and includes patterns like the Factory Pattern for tool creation.

## Features

- **Draw Tool**: Draw freehand on the canvas.
- **Erase Tool**: Erase parts of the drawing.
- **Text Tool**: Add text to the canvas.

## Project Structure

```
src/
├── components/
│   ├── Canvas.tsx           # Canvas component for drawing
│   └── Toolbar.tsx          # Toolbar with tool buttons
├── contexts/
│   └── CanvasContext.tsx    # Context for managing canvas state
├── providers/
│   └── CanvasProvider.tsx   # Provider for CanvasContext
├── services/
│   └── StubAPIService.ts    # Service for API stubbing or data management
├── tools/
│   ├── Tool.ts              # Tool interface
│   ├── DrawTool.ts          # Implementation of DrawTool
│   ├── EraseTool.ts         # Implementation of EraseTool
│   ├── TextTool.tsx         # Implementation of TextTool
│   └── ToolFactory.ts       # Factory for creating tool instances
└── types/
    └── ToolType.ts          # Type definitions for tools
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- pnpm (preferred for package management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/canvas-drawing-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd canvas-drawing-app
   ```

3. Install the dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

### Running the Application

To start the development server, run:

```bash
pnpm dev
```

This will start the application on http://localhost:3000.

### Usage

- **Select a Tool**: Use the toolbar to select either the draw, erase, or text tool.
- **Draw/Erase/Add Text**: Interact with the canvas using your selected tool.
- **Change Tool**: Switch between tools using the toolbar to perform different actions on the canvas.

## Code Overview

### Toolbar Component

The `Toolbar` component is responsible for rendering the tool buttons. When a button is clicked, the corresponding tool is created using the `ToolFactory`, activated, and set as the active tool in the `CanvasContext`.

### Canvas Component

The `Canvas` component is where all the drawing and interactions happen. It uses the current tool's logic to modify the canvas based on user input.

### ToolFactory

The `ToolFactory` is used to create instances of tools based on the selected tool type. This pattern allows easy extension of new tools without modifying existing code.

### Services

The `services/` directory contains modules that handle external data fetching, API communication, or other business logic that is separate from the UI components. For example:

- **StubAPIService.ts**: A service used to mock or stub API calls for testing purposes. This can be extended to handle real API interactions or to provide predefined data responses for development.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure they follow the coding standards.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
