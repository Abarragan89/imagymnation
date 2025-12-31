import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavLinks from "./nav-links";

interface NavigationMenuWrapperProps {
    currentPath: string;
}

export default function NavigationMenuWrapper({ currentPath }: NavigationMenuWrapperProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-x-1">
                <NavLinks currentPath={currentPath} />
            </NavigationMenuList>
        </NavigationMenu>
    );
}