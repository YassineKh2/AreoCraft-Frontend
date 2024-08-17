import {Button, DarkThemeToggle, Navbar} from "flowbite-react";

export default function Header() {
    return (
        <Navbar fluid rounded className="p-5">
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/imgs/Logo.png" className="mr-3 h-16" alt="Flowbite React Logo" />
                <span className="self-center hidden sm:flex whitespace-nowrap text-xl font-semibold dark:text-white">AreoCraft</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className="flex gap-3">
                    <Button>Get started</Button>
                    <DarkThemeToggle />
                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                    Statistics
                </Navbar.Link>
                <Navbar.Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                    About
                </Navbar.Link>
                <Navbar.Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                    Contributors
                </Navbar.Link>
                <Navbar.Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                    Contact
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
}