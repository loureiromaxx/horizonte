"use client";

import Link from "next/link";

export default function Logo() {

  function handleClickLogo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (window.location.pathname === '/') {
      e.preventDefault();
    }
    document.querySelector(`#inicio`)?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="Horizonte, início"
      onClick={(e) => handleClickLogo(e)}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="14" fill="#133F55" />
        <path
          d="M5 17.5h18"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8.5 17.5a5.5 5.5 0 0 1 11 0" fill="#F0A33B" />
      </svg>
      <span className="font-display text-[23px] font-bold tracking-tight">
        Horizonte
      </span>
    </Link>
  );
}
