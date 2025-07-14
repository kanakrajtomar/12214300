import { useState } from "react";
import { shortenURL } from "../services/api";
import { logEvent } from "../services/logger";

interface ShortenFormProps {
  onShortened: (result: any) => void;
}

function URLForm({ onShortened }: ShortenFormProps) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [validityMinutes, setValidityMinutes] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleShortenClick = async () => {
    const isValidUrl = /^https?:\/\//.test(originalUrl.trim());
    if (!isValidUrl) {
      await logEvent("frontend", "warn", "component", "User tried .");
      alert("enter a valid URL ");
      return;
    }

    try {
      const result = await shortenURL(originalUrl.trim(), parseInt(validityMinutes), customCode.trim());
      await logEvent("frontend", "info", "component", ` created short URL: ${result.shortCode}`);
      onShortened(result);
    } catch (error) {
      await logEvent("frontend", "error", "component", `Shortening failed: ${error instanceof Error ? error.message : String(error)}`);
      alert("Failed to shorten the URL. Please try again.");
    }
  };

  return (
    <div className="url-form">
      <input
        type="url"
        placeholder="Enter full URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity in minutes "
        value={validityMinutes}
        onChange={(e) => setValidityMinutes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preferred Shortcode "
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <button onClick={handleShortenClick}>Generate Short Link</button>
    </div>
  );
}

export default URLForm;
