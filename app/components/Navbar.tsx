"use client";

import Image from "next/image";
import { DownloadButton } from "./DownloadButton";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="https://opencanvasai.com" className="navbar-logo">
          <Image src="/assets/logo.png" alt="OpenCanvas AI" width={28} height={28} style={{ borderRadius: 6 }} />
          OpenCanvas AI
        </a>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a
            href="https://github.com/opencanvasai/OpenCanvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#download">Download</a>
          <DownloadButton className="navbar-cta" />
        </div>
      </div>
    </nav>
  );
}
