import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zaid Zaheer — Lead Software Engineer (Frontend)",
    short_name: "Zaid Zaheer",
    description:
      "Portfolio of Zaid Zaheer — Lead Software Engineer building real-time, AI-powered web apps with React, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
