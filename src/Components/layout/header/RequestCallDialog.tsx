import { Button } from "@/Components/ui/Button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/Dialog";
import { environment } from "@/config/environment";
import { Dispatch, SetStateAction, useState } from "react";

interface RequestCallDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const { phoneNumber } = environment;

export const RequestCallDialog: React.FC<RequestCallDialogProps> = ({
    isOpen,
    setIsOpen,
}) => {
    const [call, setCall] = useState(false);

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Would you like to call the developer?
                        </DialogTitle>

                        <div>
                            <a aria-pressed={call} href={`tel:${phoneNumber}`}>
                                {phoneNumber}
                            </a>
                        </div>
                        {call && (
                            <>
                                <p>
                                    Dialer opened — waiting for you to make the
                                    call.
                                </p>
                                <p className="text-xs">
                                    Note: For security reasons, dialers will not
                                    open on browsers.
                                </p>
                            </>
                        )}

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant={"destructive"}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                variant={"proceed"}
                                onClick={() => {
                                    setCall(true);
                                    setTimeout(() => {
                                        setCall(false);
                                        setIsOpen(false);
                                    }, 10000);
                                }}
                            >
                                Call Now
                            </Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};
