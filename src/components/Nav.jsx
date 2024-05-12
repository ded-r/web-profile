export default function Nav() {
    return (
        <>
            <div>
                <ul className="flex justify-end text-2xl py-5 px-10 space-x-20 shadow-xl" style={{ backgroundColor: "#7AB2B2" }}>
                    <li>
                        <a href="/" className="hover:underline hover:underline-offset-8">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline hover:underline-offset-8">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:underline hover:underline-offset-8">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline hover:underline-offset-8">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
