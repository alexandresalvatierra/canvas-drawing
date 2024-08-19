"use client";

import { CanvasProvider } from "@/providers/CanvasProvider";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";

export default function Home() {
  return (
    <CanvasProvider>
      <Toolbar />
      <Canvas />
    </CanvasProvider>
  );
}
