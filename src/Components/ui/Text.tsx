import { textVariants } from "@/styles/textVariants";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import React from "react";

export interface TextProps
    extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
        VariantProps<typeof textVariants> {
    asChild?: boolean;
    animate: boolean;
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
    (
        {
            className,
            weight,
            align,
            color,
            asChild = false,
            children,
            ...props
        },
        ref
    ) => {
        const Component = asChild ? Slot : "span";

        return (
            <Component
                ref={ref}
                className={textVariants({ weight, align, color, className })}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

export { Text };
