import { createContext, useContext, RefObject } from "react";
import { ToolType } from "@/types/ToolType";
import { Tool } from "@/tools/Tool";

export interface CanvasContextType {
  ref: RefObject<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null;
  activeToolType: ToolType;
  setActiveToolType: (toolType: ToolType) => void;
  activateTool: (tool: Tool) => void;
  handleSave: () => void;
}

export const CanvasContext = createContext<CanvasContextType>({
  ref: { current: null },
  context: null,
  activeToolType: "default",
  setActiveToolType: () => {},
  activateTool: () => {},
  handleSave: () => {},
});

export const useCanvasContext = () => useContext(CanvasContext);
