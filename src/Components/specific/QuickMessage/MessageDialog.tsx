import tw from "twin.macro";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/Dialog";
import emailjs from "@emailjs/browser";
import { environment } from "../../../config/environment";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/Components/ui/Button";

const { publicKey, serviceID, templateID } = environment;

interface MessageDialogProps {
    quickMessage: string;
    setQuickMessage: Dispatch<SetStateAction<string>>;
    setOnSubmitMessage: Dispatch<SetStateAction<string | undefined>>;
}

export const MessageDialog: React.FC<MessageDialogProps> = ({
    quickMessage,
    setQuickMessage,
    setOnSubmitMessage,
}) => {
    const sendMessage = (message: string) => {
        const parsedMessage = { message: message.toString() };

        if (!publicKey || !serviceID || !templateID) return;

        emailjs
            .send(serviceID, templateID, parsedMessage, { publicKey })
            .then(() => {
                setOnSubmitMessage("Message sent successfully");
                setQuickMessage("");
            });

        setTimeout(() => {
            setOnSubmitMessage("");
            console.log("message cleaned");
        }, 4500);
    };
    return (
        <div className="dark bg-background text-foreground">
            <Dialog>
                <DialogTrigger>
                    <QuickEmailButton variant={"quickMessage"}>
                        Send
                    </QuickEmailButton>
                </DialogTrigger>
                <DialogContent showCloseButton>
                    <DialogHeader>
                        <DialogTitle>
                            Are you sure sending this message?
                        </DialogTitle>
                        <DialogDescription>{quickMessage}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant={"destructive"}>
                                Close
                            </Button>
                        </DialogClose>
                        <Button
                            variant={"proceed"}
                            onClick={() => sendMessage(quickMessage)}
                        >
                            Submit
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

const QuickEmailButton = tw(Button)`
    w-[clamp(7rem, 10vw, 8rem)]
    h-[clamp(2rem, 2.5vw, 2.3rem)]
    tracking-widest
    hover:cursor-pointer
    hover:border-[0.1rem]
    animate-fade-in
    motion-reduce:opacity-100
    right-0
    mt-3
    py-[1.2rem]

`;
