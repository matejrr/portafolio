import tw, { styled } from "twin.macro";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../Components/specific/Contact/Form.tsx";
import { Input } from "../Components/ui/Input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { environment } from "../config/environment";
import SubmitButton from "@/Components/ui/SubmitButton.tsx";
import { animations } from "@/assets/index.ts";

const { publicKey, serviceID, templateID } = environment;

const FormSchema = z.object({
    fullName: z
        .string()
        .min(2, "Name must have at least 2 characters")
        .max(50, "Name must have at most 50 characters")
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/, "Name can only contain letters."),
    email: z.string().email("Invalid email format"),
    subject: z
        .string()
        .min(1, "The Subject cannot be left empty")
        .max(100, "The Subject' content is too long. Let's prioritize :)"),
    message: z
        .string()
        .min(1, "the Text cannot be left empty")
        .max(1000, "1000 characters should be enough...Keep it simpler dev!")
        .refine((data) => {
            if (data.length <= 500) return true;
            return `the message is too long by ${
                data.length - 1000
            } characters`;
        }),
});

type EmailSchema = z.infer<typeof FormSchema>;

const check = animations.find((anim) => anim.name === "check");

export const Contact: React.FC = () => {
    const [onSubmitMessage, setOnSubmitMessage] = useState<string[]>([]);
    const [headerAnimation, setHeaderAnimation] = useState(false);

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 8850) {
                setHeaderAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, []);

    const form = useForm<EmailSchema>({
        resolver: zodResolver(FormSchema),
        mode: "onChange",
        delayError: 600,
        reValidateMode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });
    const { handleSubmit, reset, setValue } = form;

    const onSubmit = useCallback(
        (values: EmailSchema) => {
            console.log(values);
            setOnSubmitMessage([
                "Your message has been set successfully",
                "I'll loop back to you ASAP",
            ]);
            const emailParams = {
                fullName: values.fullName,
                email: values.email,
                subject: values.subject,
                message: values.message,
            };
            if (!serviceID || !templateID || !publicKey) return;
            emailjs
                .send(serviceID, templateID, emailParams, publicKey)
                .then(() => {
                    setOnSubmitMessage([
                        "Your message has been set successfully",
                        "I'll loop back to you ASAP",
                        "Fancy swinging by in the meantime?",
                    ]);
                    reset();
                    setValue("email", "");
                })
                .catch(() => {
                    setOnSubmitMessage([
                        "There was an error sending your message.",
                        "Please try again later.",
                    ]);
                });
        },

        [reset, setValue]
    );

    return (
        <Container id="contact-section">
            <MainSecDesign />
            <Header>
                <SectionHeader $headerAnimation={headerAnimation}>
                    CONTACT
                </SectionHeader>
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-8 left-1/2 w-48 h-16 bg-[#cc52006e] rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
            </Header>
            <SubHeader>Let's get in touch!</SubHeader>
            <Form {...form}>
                <div className="w-full p-5 flex justify-center">
                    <form
                        className="flex flex-col gap-7 w-[50%] max-w-screen-xl  "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field, fieldState }) => {
                                const showCheck =
                                    fieldState.isDirty && !fieldState.error;

                                return (
                                    <FormItem className="flex flex-col items-center gap-2">
                                        <FormLabel className="flex justify-start w-[99%] text-md tracking-wider text-white">
                                            FullName*
                                        </FormLabel>

                                        <div className="flex flex-row items-center gap-6 w-[100%]">
                                            <FormControl>
                                                <Input
                                                    style={{
                                                        minHeight: "3.1rem",
                                                        border: fieldState.isDirty
                                                            ? "2px solid #cc5200"
                                                            : "1px solid #662900",
                                                        width: "100%",
                                                        fontSize: "0.9rem",
                                                        letterSpacing: "0.7px",
                                                        padding: "1.4rem",
                                                    }}
                                                    className="w-[60%] text-white"
                                                    placeholder="full name"
                                                    {...field}
                                                />
                                            </FormControl>

                                            {showCheck && (
                                                <div className="flex items-center">
                                                    <Lottie
                                                        animationData={
                                                            check?.animation
                                                        }
                                                        loop={false}
                                                        autoplay={true}
                                                        style={{
                                                            width: 28,
                                                            height: 28,
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => {
                                const showCheck =
                                    fieldState.isDirty && !fieldState.error;

                                return (
                                    <FormItem className="flex flex-col items-center gap-2">
                                        <FormLabel className="flex justify-start w-[99%] text-md tracking-wider text-white">
                                            Email*
                                        </FormLabel>
                                        <div className="flex flex-row items-center gap-4 w-[100%]">
                                            <FormControl>
                                                <Input
                                                    style={{
                                                        minHeight: "3.1rem",
                                                        border: fieldState.isDirty
                                                            ? "2px solid #cc5200"
                                                            : "1px solid #662900",
                                                        width: "100%",
                                                        fontSize: "0.9rem",
                                                        letterSpacing: "0.7px",
                                                        padding: "1.4rem",
                                                    }}
                                                    className="w-[60%] text-white  z-20"
                                                    placeholder="drop your email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {showCheck && (
                                                <div className="flex items-center">
                                                    <Lottie
                                                        animationData={
                                                            check?.animation
                                                        }
                                                        loop={false}
                                                        autoplay={true}
                                                        style={{
                                                            width: 28,
                                                            height: 28,
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field, fieldState }) => {
                                const showCheck =
                                    fieldState.isDirty && !fieldState.error;
                                return (
                                    <FormItem className="flex flex-col items-center gap-2">
                                        <FormLabel className="flex justify-start w-[99%] text-md tracking-wider text-white">
                                            Subject*
                                        </FormLabel>
                                        <div className="flex flex-row items-center gap-4 w-[100%]">
                                            <FormControl>
                                                <Input
                                                    style={{
                                                        minHeight: "3.1rem",
                                                        border: fieldState.isDirty
                                                            ? "2px solid #cc5200"
                                                            : "1px solid #662900",
                                                        width: "100%",
                                                        fontSize: "0.9rem",
                                                        letterSpacing: "0.7px",
                                                        padding: "1.4rem",
                                                    }}
                                                    className="w-[85%] text-white z-20"
                                                    placeholder="what is it about?"
                                                    {...field}
                                                />
                                            </FormControl>
                                            {showCheck && (
                                                <div className="flex items-center">
                                                    <Lottie
                                                        animationData={
                                                            check?.animation
                                                        }
                                                        loop={false}
                                                        autoplay={true}
                                                        style={{
                                                            width: 28,
                                                            height: 28,
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field, fieldState }) => (
                                <FormItem className="flex flex-col items-center gap-2">
                                    <FormLabel className="flex justify-start w-[99%] text-md tracking-wider text-white">
                                        Message*
                                    </FormLabel>
                                    <FormControl>
                                        <textarea
                                            style={{
                                                borderRadius: "12px",
                                                border: fieldState.isDirty
                                                    ? "2px solid #cc5200"
                                                    : "1px solid #662900",
                                                fontSize: "0.9rem",
                                                letterSpacing: "0.7px",
                                                padding: "1.4rem",
                                            }}
                                            className="w-[100%] min-h-[15rem] text-white z-20 bg-transparent border-none rounded-md resize-none placeholder:text-white placeholder:opacity-70 outline-none focus:outline-none focus:ring-0 ring-0"
                                            placeholder="I'm all ears!"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <SubmitButton />
                    </form>
                </div>
                <div className="flex flex-col justify-center gap-4 w-full mt-4">
                    {onSubmitMessage.map((message, index) => (
                        <span
                            className="text-white tracking-widest text-md text-center"
                            key={index}
                        >
                            {message}
                        </span>
                    ))}
                </div>
            </Form>
        </Container>
    );
};

export default React.memo(Contact);

const Container = tw.div`
   flex flex-col items-center self-center gap-16 h-auto pt-[6%] w-[100%] mb-36 z-20 px-[39.2px]
`;

const MainSecDesign = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    filter: hue-rotate(120deg);
    transform-origin: top;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }
`;

const Header = styled.span`
    ${tw`
    flex relative justify-center items-center
    text-sm font-bold z-0 tracking-[8px]
    py-6 w-[35%] mb-3
    border-r border-l
    rounded-[10px] rounded-br-[10px]
    overflow-hidden
  `}

    border-left: 1px solid #e6288c;
    border-right: 2px solid #cc5200;

    &::before {
        content: "";
        ${tw`absolute left-0 top-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      #e6288c 10%,
      #cc4080 25%,
      #cc5200 60%,
      #993d00 85%,
      #662900 100%
    );
    }

    &::after {
        content: "";
        ${tw`absolute left-0 bottom-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      #e6288c 10%,
      #cc4080 25%,
      #cc5200 60%,
      #993d00 85%,
      #662900 100%
    );
    }

    @media (max-width: 760px) {
        flex: 1 !important;
    }
`;

const SectionHeader = styled.span<{ $headerAnimation: boolean }>`
    ${tw`font-bold tracking-[8px] text-center`}

    opacity: ${({ $headerAnimation }) => ($headerAnimation ? 1 : 0)};
    transition: opacity 0.8s ease-in-out, color 0.8s ease-in-out,
        text-shadow 0.8s ease-in-out;

    color: ${({ $headerAnimation }) =>
        $headerAnimation ? "#cc5200" : "#e6288c"};
`;

const SubHeader = tw.span`
   text-xl tracking-widest text-white border-b-[1px] pb-1.5
`;
