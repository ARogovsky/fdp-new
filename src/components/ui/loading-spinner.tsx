"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    document.addEventListener("routeChangeStart", handleStart);
    document.addEventListener("routeChangeComplete", handleComplete);
    document.addEventListener("routeChangeError", handleComplete);

    return () => {
      document.removeEventListener("routeChangeStart", handleStart);
      document.removeEventListener("routeChangeComplete", handleComplete);
      document.removeEventListener("routeChangeError", handleComplete);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid" />
    </div>
  );
}
