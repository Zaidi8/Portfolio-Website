import { ImageResponse } from "next/og";

export const alt =
  "Zaid Zaheer — Lead Software Engineer · React · Next.js · TypeScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111018 55%, #1a1530 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 24,
          }}
        >
          Lead Software Engineer · Frontend
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(90deg, #818cf8, #a78bfa, #c084fc)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 28,
          }}
        >
          Zaid Zaheer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#cbd5e1",
          }}
        >
          React · Next.js · TypeScript
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          Building real-time, AI-powered web apps
        </div>
      </div>
    ),
    { ...size }
  );
}
