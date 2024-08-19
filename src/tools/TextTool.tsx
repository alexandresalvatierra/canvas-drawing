import { Tool } from "./Tool";

export class TextTool implements Tool {
  private context: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private inputElement: HTMLInputElement | null = null;
  private textPosition = { x: 0, y: 0 };

  activate(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    this.context = context;
    this.canvas = canvas;

    if (!this.context || !this.canvas) return;

    this.resetCanvasContext();

    this.canvas.addEventListener("click", this.handleClick);
  }

  deactivate(): void {
    if (this.canvas) {
      this.canvas.removeEventListener("click", this.handleClick);
    }
    this.removeInputElement();
  }

  private handleClick = (event: MouseEvent) => {
    const rect = this.canvas!.getBoundingClientRect();
    this.textPosition.x = event.clientX - rect.left;
    this.textPosition.y = event.clientY - rect.top;

    this.createInputElement();
  };

  private createInputElement(): void {
    this.removeInputElement();

    this.inputElement = document.createElement("input");
    this.inputElement.type = "text";

    this.inputElement.style.position = "absolute";
    this.inputElement.style.left = `${this.textPosition.x - 4}px`;
    this.inputElement.style.top = `${this.textPosition.y + 52}px`;
    this.inputElement.style.padding = "0";
    this.inputElement.style.margin = "0";
    this.inputElement.style.border = "none";
    this.inputElement.style.outline = "none";
    this.inputElement.style.background = "transparent";
    this.inputElement.style.font = "20px Arial";

    document.body.appendChild(this.inputElement);

    this.inputElement.addEventListener("keydown", this.handleKeyDown);
    this.inputElement.addEventListener("blur", this.handleBlur);

    this.inputElement.focus();
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      this.addTextToCanvas();
    }
  };

  private handleBlur = () => {
    this.addTextToCanvas();
  };

  private addTextToCanvas(): void {
    if (this.context && this.inputElement) {
      this.context.globalCompositeOperation = "source-over";
      this.context.fillStyle = "black";
      this.context.font = "20px Arial";
      this.context.fillText(
        this.inputElement.value,
        this.textPosition.x - 4,
        this.textPosition.y - 2
      );
    }
    this.removeInputElement();
  }

  private removeInputElement(): void {
    if (this.inputElement) {
      this.inputElement.removeEventListener("keydown", this.handleKeyDown);
      this.inputElement.removeEventListener("blur", this.handleBlur);
      document.body.removeChild(this.inputElement);
      this.inputElement = null;
    }
  }

  private resetCanvasContext(): void {
    if (this.context) {
      this.context.globalCompositeOperation = "source-over";
      this.context.lineWidth = 1;
      this.context.strokeStyle = "black";
      this.context.fillStyle = "black";
      this.context.font = "20px Arial";
    }
  }
}
