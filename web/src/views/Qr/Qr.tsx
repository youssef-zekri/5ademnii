import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      // QR code doesn't work with an empty string
      // so we are using a blank space as a fallback
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);

  return (
    <div className="Qr">
      <p className="Qr-title">Scan Me !</p>
      <canvas ref={canvasRef} style={{width:'10rem' , height:'10rem'}}/>
    </div>
  );
}