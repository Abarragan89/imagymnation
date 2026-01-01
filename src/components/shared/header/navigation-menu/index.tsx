
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import DesktopNavLinks from "./desktop-nav-links";
import MobileNav from "./mobile-nav";
import type { ImageMetadata } from "astro";

interface NavigationMenuWrapperProps {
    currentPath: string;
    pencilUnderline?: ImageMetadata;
}

export default function NavigationMenuWrapper({ currentPath, pencilUnderline }: NavigationMenuWrapperProps) {
    return (
        <>
            {/* Desktop Navigation - Hidden on mobile (md breakpoint) */}
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="flex-wrap gap-x-3">
                    <DesktopNavLinks currentPath={currentPath} pencilUnderline={pencilUnderline} />
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation - Shown on mobile only */}
            <div className="md:hidden">
                <MobileNav currentPath={currentPath} />
            </div>
        </>
    );
}