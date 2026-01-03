import { Button } from '@/components/ui/button'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'
import { navigationData } from '@/data/navigation'
import type { ImageMetadata } from "astro";
import LoginButton from '@/components/login-button';

interface DesktopNavLinksProps {
    currentPath: string;
    pencilUnderline?: ImageMetadata;
}

export default function DesktopNavLinks({ currentPath, pencilUnderline }: DesktopNavLinksProps) {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/" className="relative">
                        Home
                        {currentPath === '/' && pencilUnderline && (
                            <img
                                src={pencilUnderline.src}
                                alt='pencil underline'
                                className="absolute -bottom-1 left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-normal">Classes</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-100 md:grid-cols-2 xl:w-150">
                        {navigationData.classes.map((classItem) => (
                            <ListItem
                                key={classItem.title}
                                title={classItem.title}
                                href={classItem.href}
                            >
                                {classItem.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/services/birthday-parties" className="relative">
                        Parties
                        {currentPath === '/services/birthday-parties' && pencilUnderline && (
                            <img
                                src={pencilUnderline.src}
                                alt='pencil underline'
                                className="absolute -bottom-1 left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/services/camps" className="relative">
                        Camps
                        {currentPath === '/services/camps' && pencilUnderline && (
                            <img
                                src={pencilUnderline.src}
                                alt='pencil underline'
                                className="absolute -bottom-1 left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <LoginButton isRounded={true} />
            </NavigationMenuItem>
        </>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}