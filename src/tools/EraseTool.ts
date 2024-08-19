import { Tool } from "./Tool";

export class EraseTool implements Tool {
  private context: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private isErasing = false;

  activate(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    this.context = context;
    this.canvas = canvas;

    if (!this.context || !this.canvas) return;

    this.context.globalCompositeOperation = "destination-out";
    this.context.lineWidth = 24;

    this.canvas.addEventListener("mousedown", this.startErasing);
    this.canvas.addEventListener("mousemove", this.erase);
    this.canvas.addEventListener("mouseup", this.stopErasing);
    this.canvas.addEventListener("mouseleave", this.stopErasing);
  }

  deactivate(): void {
    if (this.canvas) {
      this.canvas.removeEventListener("mousedown", this.startErasing);
      this.canvas.removeEventListener("mousemove", this.erase);
      this.canvas.removeEventListener("mouseup", this.stopErasing);
      this.canvas.removeEventListener("mouseleave", this.stopErasing);
    }

    if (this.context) {
      this.context.globalCompositeOperation = "source-over";
    }
  }

  private startErasing = (event: MouseEvent) => {
    if (this.context) {
      this.isErasing = true;
      this.context.beginPath();
      this.context.moveTo(event.offsetX, event.offsetY);
    }
  };

  private erase = (event: MouseEvent) => {
    if (this.isErasing && this.context) {
      this.context.lineTo(event.offsetX, event.offsetY);
      this.context.stroke();
    }
  };

  private stopErasing = () => {
    if (this.context) {
      this.isErasing = false;
      this.context.closePath();
    }
  };
}
