"use client";

import Link from "next/link";

export default function Navbar() {

    function handleClickNavbar(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
        e.preventDefault();
        document.querySelector(`#${href}`)?.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <nav className="hidden justify-center gap-8 text-base md:flex" aria-label="Seções">
        <Link 
        href="#como-funciona" 
        className="transition-colors hover:text-sea"
        onClick={(e) => handleClickNavbar(e, 'como-funciona')}
        >
            Como funciona
        </Link>
        <Link 
        href="#recursos" 
        className="transition-colors hover:text-sea"
        onClick={(e) => handleClickNavbar(e, 'recursos')}
        >
            Recursos
        </Link>
    </nav>
  );
}