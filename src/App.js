import React, { useState } from "react";

export default function App() {
  const [fabricFile, setFabricFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFabricUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFabricFile(URL.createObjectURL(file));
    }
  };

  const generateSuit = () => {
    if (!fabricFile) return;
    setLoading(true);

    // Simulated AI generation
    setTimeout(() => {
      setGeneratedImage("https://images.unsplash.com/photo-1618354691373-4e7e38277e20?auto=format&fit=crop&w=400&h=600&q=80");
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Fabric to Suit Generator</h1>

      <input type="file" accept="image/*" onChange={handleFabricUpload} />

      {fabricFile && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Selected Fabric:</h2>
          <img
            src={fabricFile}
            alt="Fabric preview"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "1px solid #ccc" }}
          />
        </div>
      )}

      <div style={{ marginTop: "1rem" }}>
        <button onClick={generateSuit} disabled={loading || !fabricFile}>
          {loading ? "Generating..." : "Generate Suit"}
        </button>
      </div>

      {generatedImage && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Generated Suit:</h2>
          <img
            src={generatedImage}
            alt="Generated suit"
            style={{ width: "100%", maxWidth: "400px", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
}
