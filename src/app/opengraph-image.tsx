import { ImageResponse } from "next/og";
import { profile, siteUrl } from "@/data/profile";
import { industries } from "@/data/profile";

/** Branded social share card, generated at build time. */
export const alt = "Taiwo Joseph, Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0B1A32";
const TEAL = "#66E1DB";
const INFO = "#CBD5F6";
const MUTED = "#8892AF";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: NAVY,
          backgroundImage: `radial-gradient(1000px 500px at 85% -10%, rgba(102,225,219,0.18), transparent)`,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: brand + availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: TEAL,
                color: NAVY,
                fontSize: 32,
                fontWeight: 800,
              }}
            >
              JT
            </div>
            <div
              style={{
                display: "flex",
                color: TEAL,
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              JTK<span style={{ color: MUTED }}>.</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: MUTED,
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#22c55e",
              }}
            />
            {profile.availability}
          </div>
        </div>

        {/* Middle: name + role + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            {profile.name}
            <span style={{ color: TEAL }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: TEAL,
              fontSize: 34,
              fontWeight: 700,
              marginTop: 8,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              display: "flex",
              color: INFO,
              fontSize: 40,
              fontWeight: 600,
              marginTop: 22,
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        {/* Bottom: industries + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {industries.slice(0, 3).map((industry) => (
              <div
                key={industry}
                style={{
                  display: "flex",
                  color: INFO,
                  fontSize: 22,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                {industry}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: MUTED, fontSize: 24 }}>
            {siteUrl.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
