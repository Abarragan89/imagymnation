"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavLinks from "./nav-links"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export default function MobileNav({ currentPath }: { currentPath: string }) {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <NavigationMenu className="items-start justify-start">
                    <NavigationMenuList className="flex flex-col items-start pl-3">
                        <NavLinks currentPath={currentPath} />
                    </NavigationMenuList>
                </NavigationMenu>
            </SheetContent>
        </Sheet>
    )
}
