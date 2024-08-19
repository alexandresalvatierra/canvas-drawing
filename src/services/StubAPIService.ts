export const saveCanvasState = (canvasState: any): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Canvas state saved:", canvasState);
      resolve();
    }, 1000); // Simulates a 1-second API delay
  });
};

export const loadCanvasState = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const savedState = {}; // Mock saved state
      console.log("Canvas state loaded");
      resolve(savedState);
    }, 1000);
  });
};
