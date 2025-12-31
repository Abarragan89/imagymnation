import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationData } from '@/data/navigation'
import { Home } from 'lucide-react';

interface MobileNavLinksProps {
    currentPath: string;
}

export default function MobileNavLinks({ currentPath }: MobileNavLinksProps) {
    return (
        <div className="w-full">
            {/* Classes Section */}
            <div className="mt-4 w-full">
                <h3 className="text-md font-bold uppercase tracking-wider mb-3 px-3">
                    Classes
                </h3>
                <div className="space-y-1 w-full">
                    {navigationData.classes.map((classItem) => (
                        <NavigationMenuItem key={classItem.href} className="w-full block">
                            <NavigationMenuLink asChild className="w-full block rounded-none text-md">
                                <a
                                    href={classItem.href}
                                    className="w-full transition-colors pl-6 hover:bg-secondary"
                                >
                                    {classItem.title}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className="mt-4 w-full">
                <h3 className="text-md font-bold uppercase tracking-wider mb-3 px-3">
                    Services
                </h3>
                <div className="space-y-1 w-full">
                    <NavigationMenuItem className="w-full block">
                        <NavigationMenuLink asChild className="w-full block rounded-none hover:bg-secondary text-md">
                            <a
                                href="/birthday-parties"
                                className={`w-full block py-2 pl-6 ${currentPath === '/birthday-parties'
                                    ? 'bg-secondary/80'
                                    : 'hover:bg-secondary/80'
                                    }`}
                            >
                                Birthday Parties
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem className="w-full block">
                        <NavigationMenuLink asChild className="w-full block">
                            <a
                                href="/coaches"
                                className={`w-full block py-2 px-3 rounded-md transition-colors ${currentPath === '/coaches'
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'hover:bg-muted'
                                    }`}
                            >
                                Coaches
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem> */}

                    {navigationData.additionalServices.map((service) => (
                        <NavigationMenuItem key={service.href} className="w-full block">
                            <NavigationMenuLink asChild className="w-full block rounded-none hover:bg-secondary text-md">
                                <a
                                    href={service.href}
                                    className="w-full block py-2 pl-6"
                                >
                                    {service.label}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </div>
            </div>
        </div>
    );
}