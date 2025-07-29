"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 border-2 rounded font-bold text-sm shadow-[4px_4px_0px_black] transition-colors",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
