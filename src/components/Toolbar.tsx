import { useCanvasContext } from "@/contexts/CanvasContext";
import { ToolType } from "@/types/ToolType";
import { ToolFactory } from "@/tools/ToolFactory";
import { useState } from "react";
import { Tool } from "@/tools/Tool";

const Toolbar = () => {
  const { context, ref, setActiveToolType, handleSave } = useCanvasContext();
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const handleToolClick = (toolType: ToolType) => {
    if (activeTool) {
      activeTool.deactivate();
    }

    const newTool = ToolFactory.createTool(toolType);
    if (context && ref.current) {
      newTool.activate(context, ref.current);
    }

    setActiveTool(newTool);
    setActiveToolType(toolType);
  };

  return (
    <div className="flex space-x-2 p-4">
      <button
        onClick={() => handleToolClick("draw")}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Draw
      </button>
      <button
        onClick={() => handleToolClick("erase")}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Erase
      </button>
      <button
        onClick={() => handleToolClick("text")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Text
      </button>
      <button
        onClick={handleSave}
        className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500"
      >
        Save
      </button>
    </div>
  );
};

export default Toolbar;
