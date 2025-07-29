"use client";
import React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 border-2 border-black rounded shadow-sm font-mono bg-neutral-light focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
};
