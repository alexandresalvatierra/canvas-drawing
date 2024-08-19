import { useCanvasContext } from "@/contexts/CanvasContext";
import { useEffect } from "react";

const cursors = {
  draw: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>") 5 25,auto`,
  erase: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🧽</text></svg>") 5 25,auto`,
  text: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🖊️</text></svg>") 5 25,auto`,
  default: "auto",
};

const Canvas = () => {
  const { ref, activeToolType } = useCanvasContext();

  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.cursor = cursors[activeToolType];
    }
  }, [activeToolType, ref]);

  return <canvas ref={ref}></canvas>;
};

export default Canvas;
