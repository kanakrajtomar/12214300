const LOG_API = "http://20.244.56.144/eva1uation-service/logs";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5ha3JhanRvbWFyNkBnbWFpbC5jb20iLCJleHAiOjE3NTI0NzE0OTgsImlhdCI6MTc1MjQ3MDU5OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjI1ZDNkNDA4LWUyYTYtNDk0YS1hNjFhLTkwNTYzMjZkMDNjYSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImthbmFrIHJhaiB0b21hciIsInN1YiI6IjMwNTIyYzRjLTIwNjgtNDE1ZS05NDJiLWJiNjQxMjI0YTNjNyJ9LCJlbWFpbCI6ImthbmFrcmFqdG9tYXI2QGdtYWlsLmNvbSIsIm5hbWUiOiJrYW5hayByYWogdG9tYXIiLCJyb2xsTm8iOiIxMjIxNDMwMCIsImFjY2Vzc0NvZGUiOiJDWnlwUUsiLCJjbGllbnRJRCI6IjMwNTIyYzRjLTIwNjgtNDE1ZS05NDJiLWJiNjQxMjI0YTNjNyIsImNsaWVudFNlY3JldCI6IkZqa1hDQ01LV3B1Y2RuQ1AifQ.i8FM74sCCfd7kbUiIPi7l3ux5P_lPYkY-wi_E26XfoQ"; // Use full token in real setup

export type LogLevel = "debug" | "info" | "warn" | "error" | "fatal";
export type Stack = "frontend";
export type FrontendPackage = "api" | "component" | "hook" | "page" | "state" | "style";
export type SharedPackage = "auth" | "config" | "middleware" | "utils";

export async function logEvent(
  stack: Stack,
  level: LogLevel,
  pkg: FrontendPackage | SharedPackage,
  message: string
): Promise<void> {
  try {
    const res = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ACCESS_TOKEN,
      },
      body: JSON.stringify({ stack, level, package: pkg, message }),
    });

    if (!res.ok) {
      console.error("failed", await res.text());
    }
  } catch (e) {
    console.error("request error", e);
  }
}