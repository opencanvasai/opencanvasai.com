"use client";

import { useOsDetect, OS_LABELS, type OsPlatform } from "@/app/hooks/useOsDetect";

/* ─── Platform Icons ─────────────────────────────────────── */
function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.027.05.05.08.085.333.367.947.456 1.526.456.578-.003 1.772-.404 2.228-.545.428-.134.835-.368.96-.701.126-.31.016-.65-.306-1.06-.156-.2-.232-.397-.227-.626-.022-.202.042-.405.134-.601.19-.401.467-.7.786-.861l.003-.003c.387-.251.735-.586.972-1.076.237-.49.347-1.129.207-2.006-.134-.876-.535-1.884-1.327-3.1-.567-1.024-.963-1.876-1.024-2.994-.067-1.16.403-2.548.112-4.18-.223-1.22-.563-1.907-1.077-2.416-.51-.513-1.158-.816-2.063-.985-.36-.075-.755-.107-1.187-.107zm0 0" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function OsIcon({ os }: { os: OsPlatform }) {
  if (os === "windows") return <WindowsIcon />;
  if (os === "linux") return <LinuxIcon />;
  if (os === "mac") return <AppleIcon />;
  return <DownloadIcon />;
}

/* ─── Download Button ────────────────────────────────────── */
interface DownloadButtonProps {
  variant?: "primary" | "secondary" | "cta";
  className?: string;
}

export function DownloadButton({ variant = "primary", className = "" }: DownloadButtonProps) {
  const os = useOsDetect();

  const btnClass =
    variant === "cta"
      ? "btn-primary"
      : variant === "primary"
        ? "btn-primary"
        : "btn-secondary";

  const style =
    variant === "cta"
      ? { padding: "18px 48px", fontSize: 17 }
      : variant === "primary" && className.includes("navbar")
        ? {}
        : undefined;

  const label =
    variant === "cta" ? `${OS_LABELS[os]} — It's Free` : OS_LABELS[os];

  return (
    <a
      href="https://github.com/opencanvasai/OpenCanvas/releases"
      target="_blank"
      rel="noopener noreferrer"
      className={`${btnClass} ${className}`}
      style={style}
    >
      <OsIcon os={os} />
      {label}
    </a>
  );
}

/* ─── OS-aware subtitle for download CTA ─────────────────── */
export function DownloadSubtitle() {
  const os = useOsDetect();
  return (
    <>
      {os === "mac" && "Download for Mac. Windows and Linux coming soon."}
      {os === "windows" && "Download for Windows. Mac and Linux also available."}
      {os === "linux" && "Download for Linux. Mac and Windows also available."}
      {os === "unknown" && "Available for Mac, Windows, and Linux."}
    </>
  );
}
