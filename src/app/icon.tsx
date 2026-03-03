import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#0a0a10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 60 60" width="26" height="26">
          <path d="M30 5L15 20L30 35L45 20Z" fill="#00e676" />
          <path d="M30 20L15 35L30 50L45 35Z" fill="#00e676" opacity="0.4" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
