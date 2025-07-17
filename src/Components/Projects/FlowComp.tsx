import {
    addEdge,
    Background,
    BackgroundVariant,
    Connection,
    ReactFlow,
    useEdgesState,
    useNodesState,
    type ColorMode,
} from "@xyflow/react";
import React, { useEffect, useMemo, useState } from "react";
import "@xyflow/react/dist/style.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { VideoRef } from "@/data";
import { VideoNode } from "./VideoNode";

interface FlowCompProps {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    VideoComponent: VideoRef;
    index: number;
}

const MobilePosition = {
    xxxxs: { x: 68, y: 40 },
    xxxs: { x: 73, y: 40 },
    xxs: { x: 81, y: 40 },
    xs: { x: 85, y: 40 },
    s: { x: 40, y: 50 },
    md: { x: 60, y: 55 },
};

const WebPagePosition = {
    md: { x: -80, y: -10 },
    md2: { x: 0, y: 40 },
};

export const FlowComp: React.FC<FlowCompProps> = ({
    videoRef,
    VideoComponent,
    index,
}) => {
    const [colorMode] = useState<ColorMode>("dark");
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const nodeData = useMemo(
        () => ({
            videoRef,
            index,
            VideoComponent,
        }),
        [videoRef, index, VideoComponent]
    );

    const InitialNodes = useMemo(
        () => [
            {
                id: "1",
                type: "video",
                data: nodeData,
                position: MobilePosition.md,
                draggable: false,
                selectable: false,
            },
        ],
        [nodeData]
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(InitialNodes);

    const smallScreen = useMediaQuery("(max-width: 860px)");
    const xsSmallScreen = useMediaQuery("(max-width: 805px)");
    const xxsSmallScreen = useMediaQuery("(max-width: 456px)");
    const xxxsSmallScreen = useMediaQuery("(max-width: 420px)");
    const xxxxsSmallScreen = useMediaQuery("(max-width: 390px)");

    const nodeTypes = useMemo(
        () => ({
            video: VideoNode,
        }),
        []
    );

    useEffect(() => {
        let newPosition = MobilePosition.md;
        if (xxxxsSmallScreen) {
            newPosition = MobilePosition.xxxxs;
        } else if (xxxsSmallScreen) {
            newPosition = MobilePosition.xxxs;
        } else if (xxsSmallScreen) {
            newPosition = MobilePosition.xxs;
        } else if (xsSmallScreen) {
            newPosition = MobilePosition.xs;
        } else if (smallScreen) {
            newPosition = MobilePosition.s;
        } else if (index === 1) {
            newPosition = WebPagePosition.md;
        } else if (index === 2) {
            newPosition = WebPagePosition.md2;
        } else {
            newPosition = MobilePosition.md;
        }
        setNodes((prev) =>
            prev.map((node) =>
                node.id === "1" ? { ...node, position: newPosition } : node
            )
        );
    }, [
        smallScreen,
        xsSmallScreen,
        xxsSmallScreen,
        xxxsSmallScreen,
        xxxxsSmallScreen,
        index,
        setNodes,
    ]);

    const onConnect = React.useCallback(
        (params: Connection) => setEdges((es) => addEdge(params, es)),
        [setEdges]
    );

    return (
        <div className="h-full w-full bg-slate-50">
            <ReactFlow
                preventScrolling={false}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                panOnDrag={false}
                colorMode={colorMode}
                proOptions={{ hideAttribution: true }}
                nodeTypes={nodeTypes}
                nodes={nodes}
                onNodesChange={onNodesChange}
                style={{ width: "100%", height: "100%" }}
            >
                <Background
                    bgColor="black"
                    color="white"
                    variant={BackgroundVariant.Cross}
                    gap={40}
                    size={0.5}
                />
            </ReactFlow>
        </div>
    );
};
