import tw from "twin.macro";

interface ProgressHeaderProps {
    heading: {
        webPage: {
            name: string;
            sections: string[];
        };
        adminPage: {
            name: string;
            sections: {
                myContent: string[];
            };
        };
        designPage: {
            name: string;
            sections: string[];
        };
    };
}

const OnlineGalleryHeader: React.FC<ProgressHeaderProps> = () => {
    return (
        <Container>
            {}
            <Sections></Sections>
        </Container>
    );
};

export default OnlineGalleryHeader;

const Container = tw.div`flex flex-1 flex-row gap-3 w-full h-4 px-7 py-10`;
const Sections = tw.div`text-[1rem] text-gray-400 [letter-spacing: 2px] font-semibold`;
