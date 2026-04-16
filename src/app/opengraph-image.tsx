import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #0f3767 0%, #173766 60%, #f26b1d 100%)",
          color: "#eef6ff",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", opacity: 0.92 }}>
          AI/ML Engineer Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>Damodar Yadav</div>
          <div style={{ fontSize: 34, opacity: 0.94 }}>AI/ML · Data Science · Data Engineering</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.9 }}>
          <span>Mumbai, Maharashtra</span>
          <span>github.com/daemonX10</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
