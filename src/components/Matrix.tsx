import React, { useEffect, useRef, useState } from "react";

interface CanvasProps {
  letters?: string[]; // Optional prop to customize letters
}

const Matrix: React.FC<CanvasProps> = ({
  letters = "漢字 ひらがな カタカナ ひらがな 漢字 カタカナ ひらがな 漢字 ひらがな カタカナ 漢字 ひらがな カタカナ 漢字 ひらがな カタカナ".split(
    "",
  ),
}) => {
  // Ensure letters array has a valid length (avoid empty string)
  

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [hasContext, setHasContext] = useState(false);

  useEffect(() => {
    const validLetters = letters.length > 0 ? letters : [];
    const canvas =
      document.querySelector("canvas") ?? document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Update refs directly with context
    canvasRef.current = canvas;
    ctxRef.current = ctx;

    if (ctx) {
      setHasContext(true);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const fontSize = 10;
      const columns = canvas.width / fontSize;
      const drops: number[] = Array(columns).fill(1);

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, .1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < drops.length; i++) {
          const text = validLetters[Math.floor(Math.random() * validLetters.length)];
          ctx.fillStyle = "#0f0";
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
        }
      };
      setInterval(draw, 33);
    }
  }, [letters]); // Depend on validLetters to trigger on change

  return hasContext ? <canvas ref={canvasRef} /> : null;
};

export default Matrix;