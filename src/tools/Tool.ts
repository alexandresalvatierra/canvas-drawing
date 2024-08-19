export interface Tool {
  activate(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
  deactivate(): void;
}
