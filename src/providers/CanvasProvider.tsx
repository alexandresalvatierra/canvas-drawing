import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import { CanvasContext } from "@/contexts/CanvasContext";
import { ToolType } from "@/types/ToolType";
import { Tool } from "@/tools/Tool";
import { saveCanvasState, loadCanvasState } from "@/services/StubAPIService";

interface CanvasProviderProps {
  children: ReactNode;
}

export const CanvasProvider: React.FC<CanvasProviderProps> = ({ children }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [activeToolType, setActiveToolType] = useState<ToolType>("default");

  useEffect(() => {
    if (ref.current) {
      setContext(ref.current.getContext("2d"));
    }

    loadCanvasState().then((state) => {
      if (context && state) {
        applyLoadedStateToCanvas(state);
      }
    });
  }, [context]);

  const activateTool = useCallback(
    (tool: Tool) => {
      if (context && ref.current) {
        tool.activate(context, ref.current);
      }
    },
    [context]
  );

  const handleSave = useCallback(() => {
    const currentState = getCurrentCanvasState();
    saveCanvasState(currentState);
  }, []);

  const value = useMemo(
    () => ({
      ref,
      context,
      activeToolType,
      setActiveToolType,
      activateTool,
      handleSave,
    }),
    [context, activeToolType, activateTool, handleSave]
  );

  return (
    <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
  );
};

// Implement the function to get the current canvas state
const getCurrentCanvasState = () => {
  // Logic to extract the current state of the canvas (e.g., paths, drawn elements, etc.)
  return {};
};

// Implement the function to apply the loaded state to the canvas
const applyLoadedStateToCanvas = (state: any) => {
  // Logic to redraw the canvas based on the loaded state
};
