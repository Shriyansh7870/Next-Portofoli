"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { FiDownload } from "react-icons/fi";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[44] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase btracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
import { useEffect, useCallback } from "react";
const Dowland = () => {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/assest/work/Shriyansh.pdf";
    link.download = "Resume.pdf";
    link.click();
  }, []);

  return (
    <button
      onClick={handleDownload}
      className="uppercase flex items-center gap-2 border-2 border-accent p-2 rounded-2xl"
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </button>
  );
};

export { Button, buttonVariants, Dowland };
