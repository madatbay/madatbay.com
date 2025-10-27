import { notFound } from "next/navigation"
import KeystaticApp from "./keystatic"

export default function Layout() {
  if (process.env.NODE_ENV !== "development") {
    return notFound()
  }
  return <KeystaticApp />
}
