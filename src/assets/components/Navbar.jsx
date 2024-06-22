import React, { useState, useEffect } from "react";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrollingUp, setScrollingUp] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Downscroll code
                setScrollingUp(false);
            } else {
                // Upscroll code
                setScrollingUp(true);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="main-nav" className={`p-4 flex justify-between fixed top-0 w-full sm:w-full text-[22px] font-bold z-[999] transition-transform duration-300 ${
                isScrollingUp ? "transform translate-y-0" : "transform -translate-y-full"
            }`} style={{ fontFamily: "Roboto Condensed,Lato,Arial,sans-serif" }}>
            <div className="text-white"></div>

            <div>
                <ul className="hidden sm:flex text-white">
                    <li className="px-2">
                        <a href="#start" onClick={handleLinkClick}>
                            Start<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="#work" onClick={handleLinkClick}>
                            Projects<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="#tech-stack" onClick={handleLinkClick}>
                            Tech Stack<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="#about" onClick={handleLinkClick}>
                            About<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="px-2">
                        <a href="#contact" onClick={handleLinkClick}>
                            Contact<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hamburger flex flex-col sm:hidden justify-between w-[40px] h-[20px] z-[999]" onClick={toggleMenu}>
                <span className={`bar bg-white border-solid rounded border-2 w-[40%] transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1' :''}`}></span>               
                <span className={`bar bg-white border-solid rounded border-2 w-[80%] transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-x-1' :''}`}></span>
                <span className={`bar bg-white border-solid rounded border-2 w-[60%] transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 -translate-y-1 translate-x-1' :''}`}></span>
            </div>

            <div className={`mobile-menu w-full absolute top-12 left-0 flex justify-center transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-[500px] p-5 shadow-[0 0 50px 80px #0e0c16]" : "max-h-0 p-0"
                } overflow-hidden`} style={{ boxShadow: isMenuOpen ? "0 0 50px 80px #0e0c16" : "none" }}>
                    
                <ul className="flex flex-col text-white items-center">
                    <li className="py-2">
                        <a href="#start" onClick={handleLinkClick}>
                            Start<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#work" onClick={handleLinkClick}>
                            Projects<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#tech-stack" onClick={handleLinkClick}>
                            Tech Stack<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#about" onClick={handleLinkClick}>
                            About<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#contact" onClick={handleLinkClick}>
                            Contact<span className="nav-span"> /&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
