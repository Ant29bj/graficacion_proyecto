import { useRef, useEffect, useState } from "react";
import { DDA } from "../algoritmos/dda";
import "../App.css";
export function Lienzo() {
  const canvasRef = useRef(null);

  const [puntos, setPuntos] = useState({ x: null, y: null });
  const [fin, setFin] = useState({ x: null, y: null });

  const handleMouseClick = (event) => {
    const { clientX, clientY } = event;
    if (puntos.x == null || puntos.y == null) {
      setPuntos({ x: clientX, y: clientY });
      return;
    }

    if (fin.x == null || fin.y) {
      setFin({ x: clientX, y: clientY });
      return;
    }

    console.log(puntos.x, fin.x);
  };

  useEffect(() => {
    console.log("entro");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    DDA(ctx, puntos.x, puntos.y, fin.x, fin.y);
    setPuntos({ x: null, y: null });
    setFin({ x: null, y: null });
  }, [puntos.x, puntos.y, fin.x, fin.y]);

  return <canvas ref={canvasRef} onClick={handleMouseClick} />;
}
