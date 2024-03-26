import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Madat Bayramov"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const commitMono = fetch(
    new URL("../assets/fonts/CommitMono-700-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 4,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            madatbay.com
          </span>
        </div>
        <div
          style={{
            margin: "0 42px",
            padding: "20px 50px",
            fontSize: 40,
            maxWidth: "100%",
            textAlign: "center",
            backgroundColor: "#16A34A",
            color: "white",
            lineHeight: 1.4,
            borderRadius: 6,
          }}
        >
          Madat Bayramov - Software Engineer
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "CommitMono",
          data: await commitMono,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
