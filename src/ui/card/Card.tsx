"use client";
import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("p-6 bg-white border-2 border-black rounded shadow-[4px_4px_0px_black]", className)}
      {...props}
    >
      {children}
    </div>
  );
};
