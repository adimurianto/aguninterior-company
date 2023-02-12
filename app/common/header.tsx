"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <Image
            src="/logo-head.png"
            alt="logo"
            layout='responsive'
            height="70"
            width="380"
            style={{maxHeight:"2.5rem"}}/>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className={pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page">Home</a></li>
        <li className="nav-item"><Link href="/profile" className={pathname == "/profile" ? "nav-link active" : "nav-link"}>Profile</Link></li>
        <li className="nav-item"><Link href="/office" className={pathname == "/office" ? "nav-link active" : "nav-link"}>Office</Link></li>
        <li className="nav-item"><Link href="/gallery" className={pathname == "/gallery" ? "nav-link active" : "nav-link"}>Gallery</Link></li>
      </ul>
    </header>
  )
}