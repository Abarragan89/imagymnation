
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import DesktopNavLinks from "./desktop-nav-links";
import MobileNav from "./mobile-nav";

interface NavigationMenuWrapperProps {
    currentPath: string;
}

export default function NavigationMenuWrapper({ currentPath }: NavigationMenuWrapperProps) {
    return (
        <>
            {/* Desktop Navigation - Hidden on mobile (md breakpoint) */}
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="flex-wrap gap-x-3">
                    <DesktopNavLinks currentPath={currentPath} />
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation - Shown on mobile only */}
            <div className="md:hidden">
                <MobileNav currentPath={currentPath} />
            </div>
        </>
    );
}