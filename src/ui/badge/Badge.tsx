"use client";
import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "error";
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = "default",
  ...props
}) => {
  const variantClasses = {
    default: "bg-neutral text-black",
    success: "bg-green-500 text-white",
    error: "bg-red-600 text-white",
  };

  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-xs font-semibold border-2 border-black rounded",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
