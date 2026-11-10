import { ImageResponse } from "next/og";

export function createSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f7f2e8",
          color: "#14212a",
          padding: "68px 76px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            right: -120,
            top: -180,
            background: "#a8d8ef",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 34,
            height: 34,
            borderRadius: 999,
            right: 370,
            top: 84,
            background: "#e86d4d",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#2259c7",
              fontSize: 23,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Technology × leadership × social impact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                maxWidth: 900,
                fontFamily: "Georgia",
                fontSize: 76,
                lineHeight: 1.03,
                letterSpacing: -3,
              }}
            >
              Hernán Carvente Martinez
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 820,
                fontSize: 29,
                lineHeight: 1.35,
                color: "#42505a",
              }}
            >
              Social entrepreneur, nonprofit executive, leadership strategist,
              and AI builder.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22 }}>
            <div style={{ width: 54, height: 4, background: "#e86d4d" }} />
            Building useful systems with people closest to the challenge.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
