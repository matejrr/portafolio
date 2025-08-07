import * as Dialog from "@radix-ui/react-dialog";
import { Icons } from "../shared/Icons";
import { Dispatch, SetStateAction } from "react";
import HeaderAnimatLinks from "../layout/header/HeaderAnimatLinks";

interface BurgerDialogProps {
    openBurgerSheet: boolean;
    setOpenBurgerSheet: Dispatch<SetStateAction<boolean>>;
    sections: {
        works: HTMLElement | null;
        skills: HTMLElement | null;
        projects: HTMLElement | null;
        aboutMe: HTMLElement | null;
        contact: HTMLElement | null;
    };
}

export const BurgerDialog: React.FC<BurgerDialogProps> = ({
    openBurgerSheet,
    setOpenBurgerSheet,
    sections,
}) => {
    return (
        <Dialog.Root open={openBurgerSheet} onOpenChange={setOpenBurgerSheet}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40" />
                <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-black text-white ">
                    <div className="absolute right-12 top-8 mr-[1px] mt-1">
                        <Icons.goBack
                            onClick={() => setOpenBurgerSheet(false)}
                        />
                    </div>
                    <nav className="flex flex-col gap-6 text-lg items-center justify-center h-[60%]">
                        <HeaderAnimatLinks
                            delay="50ms"
                            openBurgerSheet={openBurgerSheet}
                            text="WORKS"
                            onClick={() => {
                                setOpenBurgerSheet(false);
                                setTimeout(() => {
                                    sections.works?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }, 250); // allow DOM to settle
                            }}
                        />
                        <HeaderAnimatLinks
                            delay="100ms"
                            openBurgerSheet={openBurgerSheet}
                            text="SKILLS"
                            onClick={() => {
                                setOpenBurgerSheet(false);
                                setTimeout(() => {
                                    sections.skills?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }, 250); // allow DOM to settle
                            }}
                        />
                        <HeaderAnimatLinks
                            delay="150ms"
                            openBurgerSheet={openBurgerSheet}
                            text="PROJECTS"
                            onClick={() => {
                                setOpenBurgerSheet(false);
                                setTimeout(() => {
                                    sections.projects?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }, 250);
                            }}
                        />
                        <HeaderAnimatLinks
                            delay="200ms"
                            openBurgerSheet={openBurgerSheet}
                            text="ABOUT&nbsp;ME"
                            onClick={() => {
                                setOpenBurgerSheet(false);
                                setTimeout(() => {
                                    sections.aboutMe?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }, 250); // allow DOM to settle
                            }}
                        />
                        <HeaderAnimatLinks
                            delay="250ms"
                            openBurgerSheet={openBurgerSheet}
                            text="CONTACT"
                            onClick={() => {
                                setOpenBurgerSheet(false);
                                setTimeout(() => {
                                    sections.contact?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }, 250); // allow DOM to settle
                            }}
                        />
                    </nav>
                </Dialog.Content>
                <Dialog.Description aria-hidden={true} />
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default BurgerDialog;
