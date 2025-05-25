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
import { Demos } from "@/Components/shared/Demos";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface VideoRef {
    videoRef: React.RefObject<HTMLVideoElement | null>;
}

const position = {
    xxxs: { x: 75, y: 40 },
    xxs: { x: 81, y: 40 },
    xs: { x: 85, y: 40 },
    s: { x: 40, y: 50 },
    md: { x: 60, y: 55 },
};

const FlowComp: React.FC<VideoRef> = ({ videoRef }) => {
    const [colorMode] = useState<ColorMode>("dark");
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState([
        {
            id: "1",
            type: "video",
            data: { videoRef },
            position: position.md,
            draggable: false,
            selectable: false,
        },
    ]);
    const smallScreen = useMediaQuery("(max-width: 860px)");
    const xsSmallScreen = useMediaQuery("(max-width: 805px)");
    const xxsSmallScreen = useMediaQuery("(max-width: 456px)");
    const xxxsSmallScreen = useMediaQuery("(max-width: 420px)");

    const nodeTypes = useMemo(() => {
        return {
            video: ({
                data,
            }: {
                data: { videoRef: React.RefObject<HTMLVideoElement> };
            }) => (
                <Demos.deliveryApp
                    ref={data.videoRef}
                    width={xsSmallScreen ? "60%" : smallScreen ? "76%" : "76%"}
                />
            ),
        };
    }, [smallScreen, xsSmallScreen]);

    useEffect(() => {
        let newPosition = position.md;
        if (xxxsSmallScreen) {
            newPosition = position.xxxs;
        } else if (xxsSmallScreen) {
            newPosition = position.xxs;
        } else if (xsSmallScreen) {
            newPosition = position.xs;
        } else if (smallScreen) {
            newPosition = position.s;
        } else {
            newPosition = position.md;
        }
        setNodes((prev) =>
            prev.map((node) =>
                node.id === "1" ? { ...node, position: newPosition } : node
            )
        );
    }, [smallScreen, xsSmallScreen, xxsSmallScreen, xxxsSmallScreen, setNodes]);

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
                    color="#f0f0f0"
                    variant={BackgroundVariant.Cross}
                    gap={40}
                    size={0.5}
                />
            </ReactFlow>
        </div>
    );
};

export default FlowComp;
