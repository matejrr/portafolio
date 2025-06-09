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
    portfolio: React.forwardRef<HTMLVideoElement, DemoVideoProps>(
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
    biomRegistration: React.forwardRef<HTMLVideoElement, DemoVideoProps>(
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
