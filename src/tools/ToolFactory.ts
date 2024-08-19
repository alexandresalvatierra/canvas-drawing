import { Tool } from "@/tools/Tool";
import { DrawTool } from "@/tools/DrawTool";
import { EraseTool } from "@/tools/EraseTool";
import { TextTool } from "@/tools/TextTool";
import { ToolType } from "@/types/ToolType";

export const ToolFactory = {
  createTool: (type: ToolType): Tool => {
    switch (type) {
      case "draw":
        return new DrawTool();
      case "erase":
        return new EraseTool();
      case "text":
        return new TextTool();
      default:
        throw new Error("Invalid tool type");
    }
  },
};
