"use client";
import React from "react";
import Image from "next/image";

interface MoLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function MoLogo({ width = 60, height = 60, className = "" }: MoLogoProps) {
  return (
    <Image
      src="/logo.png" // Path to the image in the public folder
      alt="Mo Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
