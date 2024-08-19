import { Tool } from "./Tool";

export class DrawTool implements Tool {
  private context: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private isDrawing = false;

  activate(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    this.context = context;
    this.canvas = canvas;
    if (!this.context || !this.canvas) return;

    this.context.globalCompositeOperation = "source-over";
    this.context.strokeStyle = "black";
    this.context.lineWidth = 2;

    this.canvas.addEventListener("mousedown", this.startDrawing);
    this.canvas.addEventListener("mousemove", this.draw);
    this.canvas.addEventListener("mouseup", this.stopDrawing);
    this.canvas.addEventListener("mouseleave", this.stopDrawing);
  }

  deactivate(): void {
    if (this.canvas) {
      this.canvas.removeEventListener("mousedown", this.startDrawing);
      this.canvas.removeEventListener("mousemove", this.draw);
      this.canvas.removeEventListener("mouseup", this.stopDrawing);
      this.canvas.removeEventListener("mouseleave", this.stopDrawing);
    }
  }

  private startDrawing = (event: MouseEvent) => {
    if (this.context) {
      this.isDrawing = true;
      this.context.beginPath();
      this.context.moveTo(event.offsetX, event.offsetY);
    }
  };

  private draw = (event: MouseEvent) => {
    if (this.isDrawing && this.context) {
      this.context.lineTo(event.offsetX, event.offsetY);
      this.context.stroke();
    }
  };

  private stopDrawing = () => {
    if (this.context) {
      this.isDrawing = false;
      this.context.closePath();
    }
  };
}
