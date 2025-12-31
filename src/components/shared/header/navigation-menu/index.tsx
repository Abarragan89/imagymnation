import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";

interface NavigationMenuWrapperProps {
    currentPath: string;
}

export default function NavigationMenuWrapper({ currentPath }: NavigationMenuWrapperProps) {
    return (
        <>
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="flex-wrap gap-x-1">
                    <NavLinks currentPath={currentPath} />
                </NavigationMenuList>
            </NavigationMenu>

            <MobileNav currentPath={currentPath} />
        </>
    );
}