import * as React from "react";
import { cn } from "@/lib/utils";
import styled, { css, keyframes } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inView?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inView = false, type = "text", ...props }, ref) => {
        // your static styles
        const base = [
            "flex h-9 w-full rounded-md border border-input bg-transparent px-4 py-1 text-base shadow-sm",
            "transition-opacity duration-[1000ms] ease-in-out",
            "focus:outline-none focus:ring-0 focus:border-input", // ← no white ring, keep your input border-color
            "md:text-sm",
        ].join(" ");

        return (
            <StyledInput
                inView={inView}
                ref={ref}
                type={type}
                className={cn(base, className)}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
export { Input };

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0;}
`;

const StyledInput = styled.input<{ inView: boolean }>`
    /* your regular styles */
    width: 100%;
    height: 2.25rem;
    padding: 0 0.75rem;
    border-radius: 10px;
    background: transparent;
    font-size: 1rem;
    /* start hidden */
    opacity: 0;

    ${(view) =>
        view.inView
            ? css`
                  animation: ${fadeIn} 1s ease-out forwards;
                  animation-delay: 1.6s; /* delay before fade-in */
              `
            : css`
                  animation: ${fadeOut} 1s ease-in forwards;
                  animation-delay: 0.5s;
              `}
`;
