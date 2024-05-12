import languages from "../constants/langugaes";
import technologies from "../constants/technologies";

export default function AboutMe() {
    return (
        <div className="text-black m-10">
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src="/IMG_6418.JPG" alt="My photo" width={300} height={400} />
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-9xl">About Me</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto text-center my-14 text-2xl border border-black rounded-lg p-10">
                <p>
                    <b>
                        I am third year student at Suleyman Demirel University. As a future frontend developer, I bring a creative mindset. With a strong commitment to continuous learning and staying up-to-date with the latest industry trends, I am eager to contribute my skills and grow as a
                        professional frontend developer.
                    </b>
                </p>
            </div>
            <div>
                <p className="my-16 text-center text-6xl">
                    <b>My Stack</b>
                </p>
                <div className="grid grid-cols-5">
                    {technologies.map((tech, index) => (
                        <div key={index} className="mx-auto text-center m-4">
                            <img src={tech.logo} alt={tech.name} height={200} width={200} />
                            <b>{tech.name}</b>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="my-16 text-center text-6xl">
                    <b>Languages</b>
                </p>
                <div className="flex space-x-20 justify-center items-center align-middle">
                    {languages.map((tech, index) => (
                        <div key={index} className="text-center">
                            <img src={tech.logo} alt={tech.name} height={200} width={200} />
                            <b>{tech.name}</b>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center text-4xl my-20 underline underline-offset-8 transition ease-in-out duration-300 hover:text-blue-500 hover:scale-110">
                <p>
                    <b>
                        <a href="https://drive.google.com/file/d/1WCwjMM6q5N2-zoanHiiAM0A1kdoG9YeP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            View CV
                        </a>
                    </b>
                </p>
            </div>
        </div>
    );
}
