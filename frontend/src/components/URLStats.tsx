import { ShortURL } from "../services/api";

interface URLStatsProps {
  data: ShortURL[];
}

function URLStats({ data }: URLStatsProps) {
  if (data.length === 0) {
    return <p>No shortened URLs found</p>;
  }

  return (
    <div className="stats-container">
      {data.map((urlItem) => (
        <div className="url-stat-card" key={urlItem.shortCode}>
          <p>
            <strong>Shortcode:</strong> {urlItem.shortCode}
          </p>
          <p>
            <strong>Original URL:</strong> {urlItem.originalUrl}
          </p>
          <p>
            <strong>Created:</strong> {new Date(urlItem.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Expires:</strong> {new Date(urlItem.expiresAt).toLocaleString()}
          </p>
          <p>
            <strong>Click Count:</strong> {urlItem.clickCount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default URLStats;
