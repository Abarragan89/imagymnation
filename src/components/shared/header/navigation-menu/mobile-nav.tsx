import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MobileNavLinks from "./mobile-nav-links"
import { Home, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function MobileNav({ currentPath }: { currentPath: string }) {

    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className="max-w-100">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <a href="/" className={` pl-3
                    ${currentPath === '/' ? 'text-secondary' : 'hover:text-secondary'}
                `}>
                    <Home size={23} />
                </a>
                <NavigationMenu className="w-full max-w-full block">
                    <NavigationMenuList className="flex flex-col items-stretch">
                        <MobileNavLinks currentPath={currentPath} />
                    </NavigationMenuList>
                </NavigationMenu>
            </SheetContent>
        </Sheet>
    )
}
