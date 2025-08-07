import React from "react";
import { demos } from "@/assets";
import { DemoVideoProps } from "@/data";

// Define the props

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
    artPlatform: React.forwardRef<HTMLVideoElement, DemoVideoProps>(
        ({ width = "112%" }, ref) => (
            <video
                ref={ref}
                src={demos.artPlatform}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    display: "block",
                    width,
                    maxWidth: width,
                    maxHeight: "150%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
        )
    ),
    portfolio: React.forwardRef<HTMLVideoElement, DemoVideoProps>(
        ({ width = "100%" }, ref) => (
            <video
                ref={ref}
                src={demos.portfolio}
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
