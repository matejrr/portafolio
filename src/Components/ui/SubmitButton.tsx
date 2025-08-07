import React from "react";
import { Button } from "./Button";

const SubmitButton = React.memo(() => {
    return (
        <Button
            variant={"contact"}
            className="inline-flex items-center min-w-[290px] justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-7"
            type="submit"
        >
            <span className="text-[#cc5200] text-md tracking-widest ">
                Submit
            </span>
        </Button>
    );
});

export default SubmitButton;
