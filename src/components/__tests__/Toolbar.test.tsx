import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "../Toolbar";
import { CanvasProvider } from "@/providers/CanvasProvider";

test("activates the correct tool when button is clicked", () => {
  render(
    <CanvasProvider>
      <Toolbar />
    </CanvasProvider>
  );

  fireEvent.click(screen.getByText("Draw"));
});
