import {
    Background,
    BackgroundVariant,
    ReactFlow,
    type ColorMode,
} from "@xyflow/react";
import { useState } from "react";
import "@xyflow/react/dist/style.css";

export const FlowComp: React.FC = () => {
    const [colorMode] = useState<ColorMode>("dark");
    return (
        <div className="h-[500px] w-[500px] bg-slate-50">
            <ReactFlow
                preventScrolling={false}
                panOnDrag={false}
                colorMode={colorMode}
                proOptions={{ hideAttribution: true }}
            >
                <Background
                    bgColor="#011511"
                    color="#f0f0f0"
                    variant={BackgroundVariant.Cross}
                    gap={40}
                    size={0.5}
                />
            </ReactFlow>
        </div>
    );
};
