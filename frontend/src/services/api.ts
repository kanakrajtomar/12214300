// For the connection of the backend the below URL 
const BASE_URL = "http://localhost:3000/api"; 

export interface ShortURL {
  originalUrl: string;
  shortCode: string;
  createdAt: string;
  expiresAt: string;
  clickCount: number;
  clicks: { timestamp: string; source: string; location: string }[];
}
export async function shortenURL(
  longUrl: string,
  validity?: number,
  customCode?: string
): Promise<ShortURL> {
  const shortCode = customCode || Math.random().toString(36).substr(2, 5);
  const now = new Date();
  const expires = new Date(now.getTime() + (validity || 30) * 60000);

  return {
    originalUrl: longUrl,
    shortCode,
    createdAt: now.toISOString(),
    expiresAt: expires.toISOString(),
    clickCount: 0,
    clicks: [],
  };
}