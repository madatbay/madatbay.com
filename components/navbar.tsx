import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="border-b border-dashed">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-x border-dashed p-4">
        <Link href="/" className="text-lg font-semibold tracking-tighter">
          Madat Bayramov
        </Link>
        <nav className="space-x-2">
          <ModeToggle />
        </nav>
      </div>
    </div>
  )
}
