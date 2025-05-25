import React from "react";
import { demos } from "@/assets";

// Define the props
interface DemoVideoProps {
    width?: string;
}

export const Demos = {
    deliveryApp: React.forwardRef<HTMLVideoElement, DemoVideoProps>(
        ({ width = "76%" }, ref) => (
            <video
                ref={ref}
                src={demos.deliveryApp}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    display: "block",
                    width,
                    maxWidth: width,
                    maxHeight: "100%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
        )
    ),
};
