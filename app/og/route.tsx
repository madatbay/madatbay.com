import { siteConfig } from "@/config/site"
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  const font = fetch(
    new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer())
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${siteConfig.url}/og-bg.png)`,
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: "flex",
            fontSize: 80,
            fontFamily: "Commit Mono",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "80px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Commit Mono",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
