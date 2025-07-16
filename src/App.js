import React, { useState } from "react";

export default function App() {
  const [fabricFile, setFabricFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFabricUpload = (e) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("Fabric uploaded:", imageUrl);
      setFabricFile(imageUrl);
    }
  };

  const generateSuit = () => {
    console.log("Generate button clicked!");
    if (!fabricFile) {
      alert("No fabric uploaded!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const suitImageUrl = "https://themoderngroom.com/cdn/shop/files/TMG_MidnightBlue-Hero_2048x.jpg?v=1713992411";
      setGeneratedImage(suitImageUrl);
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Fabric to Suit Generator</h1>

      <input type="file" accept="image/*" onChange={handleFabricUpload} />

      {fabricFile && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Selected Fabric:</h2>
          <img
            src={fabricFile}
            alt="Fabric preview"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              border: "1px solid #ccc",
              borderRadius: "4px"
