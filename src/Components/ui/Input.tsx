import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inView?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inView = false, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                ref={ref}
                className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" +
                        "transition-opacity duration-[1000ms] ease-in-out  " +
                        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

                    inView ? "opacity-100" : "opacity-0",

                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
export { Input };
