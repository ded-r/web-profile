import MovingText from "react-moving-text";

const AnimatedText = () => {
    return (
        <MovingText type="flash" duration="2000ms" delay="0s" direction="normal" timing="ease-in-out" iteration="infinite" fillMode="none">
            FrontEnd Developer
        </MovingText>
    );
};
export default function Home() {
    return (
        <div className="flex-grow flex flex-col justify-center items-center text-black">
            <p className="text-5xl md:text-9xl text-center">Auyesbay Didar</p>
            <p className="text-xl md:text-4xl text-center pt-5">
                <AnimatedText />
            </p>
            <p className="mt-10">
                <a href="/contact" className="text-xl md:text-4xl underline underline-offset-8 transition ease-in-out duration-300 hover:text-blue-500">
                    Contact Me!
                </a>
            </p>
        </div>
    );
}
