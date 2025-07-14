import React from "react";
import URLForm from "../components/URLForm";
import URLStats from "../components/URLStats";

const Home = () => {
  const [urls, setUrls] = React.useState<any[]>([]);

  const handleShortened = (data: any) => {
    setUrls((prev) => [...prev, data]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>URL Shortener</h2>
      <URLForm onShortened={handleShortened} />
      <URLStats data={urls} />
    </div>
  );
};

export default Home;
