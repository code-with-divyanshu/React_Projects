import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Your Data"
          style={{ borderRadius: "10px", padding: "10px" }}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
          style={{ marginLeft: "10px" }}
        >
          Generate
        </button>
        <div>
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={200}
            style={{ marginTop: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}
