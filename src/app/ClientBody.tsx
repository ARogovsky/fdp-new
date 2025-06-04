"use client";

import { useEffect } from "react";

export function ClientBody() {
  // Ensure dark mode is applied on client side
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    document.body.className = "antialiased";
  }, []);

  return null;
}
