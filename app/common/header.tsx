"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <Image
            src="/logo-head.png"
            alt="logo"
            layout='responsive'
            height="70"
            width="380"/>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className={`nav-link`} aria-current="page">Home</a></li>
        <li className="nav-item"><Link href="/profile" className={`nav-link`}>Profile</Link></li>
        <li className="nav-item"><Link href="/office" className={`nav-link`}>Office</Link></li>
        <li className="nav-item"><Link href="/gallery" className={`nav-link`}>Gallery</Link></li>
      </ul>
    </header>
  )
}