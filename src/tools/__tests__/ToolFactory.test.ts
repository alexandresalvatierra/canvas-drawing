import { ToolFactory } from "../ToolFactory";
import { DrawTool } from "../DrawTool";
import { EraseTool } from "../EraseTool";
import { TextTool } from "../TextTool";

test("creates DrawingTool", () => {
  const tool = ToolFactory.createTool("draw");
  expect(tool).toBeInstanceOf(DrawTool);
});

test("creates EraseTool", () => {
  const tool = ToolFactory.createTool("erase");
  expect(tool).toBeInstanceOf(EraseTool);
});

test("creates TextTool", () => {
  const tool = ToolFactory.createTool("text");
  expect(tool).toBeInstanceOf(TextTool);
});
