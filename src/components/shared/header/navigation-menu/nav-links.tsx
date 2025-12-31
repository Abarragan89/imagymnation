import { Button } from '@/components/ui/button'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'

const components: { title: string; href: string; description: string }[] = [
    {
        title: "All Classes",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Baby Classes",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Kindergym",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Gymnastics (6+)",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Ninjas",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Open Gym",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function NavLinks({ currentPath }: { currentPath: string }) {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/" className="relative">
                        Home
                        {currentPath === '/' && (
                            <img
                                src="/images/link-underline.png"
                                alt=""
                                className="absolute -bottom-1  left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-normal">Classes</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-100 md:grid-cols-2 xl:w-150">
                        {components.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/birthday-parties" className="relative">
                        Parties
                        {currentPath === '/birthday-parties' && (
                            <img
                                src="/images/link-underline.png"
                                alt=""
                                className="absolute -bottom-1 left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-lg">
                    <a href="/coaches" className="relative">
                        Coaches
                        {currentPath === '/coaches' && (
                            <img
                                src="/images/link-underline.png"
                                alt=""
                                className="absolute -bottom-1 left-0 w-full h-4 object-cover"
                            />
                        )}
                    </a>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="text-md">
                    <Button asChild className="ml-3" variant="accent">
                        <a href="/sign-up">Login/Signup</a>
                    </Button>
                </NavigationMenuLink>
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
