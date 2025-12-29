import Navigation from './navigation-menu.tsx'

export default function Header() {
    return (
        <header className='flex-between px-5 pt-1'>
            <a href={"/"}>
                <img src="images/header-logo.png" alt="Imagymnation Logo" className="h-16 w-36 relative"/>
            </a>
            <Navigation />
        </header>
    )
}
