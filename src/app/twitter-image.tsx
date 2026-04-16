import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          background: "linear-gradient(135deg, #12233f 0%, #1a4f87 62%, #f26b1d 100%)",
          color: "#f2f8ff",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", opacity: 0.9 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1 }}>Damodar Yadav</div>
        <div style={{ fontSize: 34, opacity: 0.95 }}>AI/ML Engineer · Data Science · Data Engineering</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
