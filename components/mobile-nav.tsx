import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Menu } from "lucide-react"
import { MainMobileNav } from "./main-nav"
import { Button } from "./ui/button"

export default function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost" asChild>
          <Menu role="button" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-3/5">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <MainMobileNav />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
