import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import "@/app/globals.css"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-background"
      vaul-drawer-wrapper=""
    >
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl border-x border-dashed px-4 pb-32 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
