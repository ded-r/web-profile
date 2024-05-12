export default function Home() {
    return (
        <div className="flex-grow flex flex-col justify-center items-center text-black">
            <p className="text-9xl text-center">Auyesbay Didar</p>
            <p className="text-center text-4xl pt-5">Frontend Developer</p>
            <p className="mt-[10%]">
                <a href="/contact" className="text-4xl underline underline-offset-8 transition ease-in-out  duration-300 hover:text-blue-500">
                    Contact Me!
                </a>
            </p>
        </div>
    );
}
