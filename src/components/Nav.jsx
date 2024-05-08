export default function Nav() {
    return (
        <>
            <ul className="flex justify-evenly">
                <li>
                    <a href="/" className="hover:underline underline-offset-2">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </>
    );
}
