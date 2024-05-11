export default function Nav() {
    return (
        <>
            <div>
                <ul className="flex justify-end text-2xl py-5 px-10 space-x-20 bg-cyan-500">
                    <li>
                        <p className="hover:underline active:underline underline-offset-8">
                            <a href="/">Home</a>
                        </p>
                    </li>
                    <li>
                        <p className="hover:underline active:underline underline-offset-8">
                            <a href="/about">About Me</a>
                        </p>
                    </li>
                    <li>
                        <p className="hover:underline active:underline underline-offset-8">
                            <a href="/projects">Projects</a>
                        </p>
                    </li>
                    <li>
                        <p className="hover:underline active:underline underline-offset-8">
                            <a href="/contact">Contact</a>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
}
