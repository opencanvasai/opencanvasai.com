"use client";

import { useSyncExternalStore } from "react";

export type OsPlatform = "mac" | "windows" | "linux" | "unknown";

function detectOs(): OsPlatform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  const platform =
    (navigator as { userAgentData?: { platform?: string } }).userAgentData
      ?.platform?.toLowerCase() ?? "";
  if (platform.includes("mac") || ua.includes("mac")) return "mac";
  if (platform.includes("win") || ua.includes("win")) return "windows";
  if (platform.includes("linux") || ua.includes("linux")) return "linux";
  return "unknown";
}

// Cached result — navigator doesn't change
let cachedOs: OsPlatform | null = null;
function getOsSnapshot(): OsPlatform {
  if (cachedOs === null) cachedOs = detectOs();
  return cachedOs;
}
function getServerSnapshot(): OsPlatform {
  return "unknown";
}
function subscribe() {
  // OS never changes, no-op
  return () => {};
}

export function useOsDetect(): OsPlatform {
  return useSyncExternalStore(subscribe, getOsSnapshot, getServerSnapshot);
}

export const OS_LABELS: Record<OsPlatform, string> = {
  mac: "Download for Mac",
  windows: "Download for Windows",
  linux: "Download for Linux",
  unknown: "Download",
};
