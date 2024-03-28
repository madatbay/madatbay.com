import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { MainNav } from "./main-nav"
import MobileNav from "./mobile-nav"

export default function Navbar() {
  return (
    <div className="border-b border-dashed">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-x border-dashed p-4">
        <Link href="/" className="text-lg font-semibold tracking-tighter">
          Madat Bayramov
        </Link>
        <div>
          <div className="hidden items-center gap-4 sm:flex">
            <MainNav />
            <ModeToggle />
          </div>
          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  )
}
