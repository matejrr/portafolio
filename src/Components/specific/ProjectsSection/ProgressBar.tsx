"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps
    extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    active: boolean;
    inViewPort: boolean;
    value?: number; // 0–100
}

const ProgressBar = React.forwardRef<
    React.ComponentRef<typeof ProgressPrimitive.Root>,
    ProgressBarProps
>(({ className, value = 0, active, inViewPort, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        value={value}
        className={cn(
            "relative w-full rounded-full bg-gray-800 overflow-visible", // ensure overflow doesn't clip
            active && inViewPort ? "h-[0.4rem]" : "h-[0.15rem]",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn(
                "absolute left-0 transition-[width] h-[0.4rem] duration-500 ease-linear rounded-md",
                active && inViewPort
                    ? "bg-[#963bce] h-[0.4rem] z-10"
                    : "bg-primary h-full top-0"
            )}
            style={{ width: `${value}%` }}
        />
    </ProgressPrimitive.Root>
));

ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar };
