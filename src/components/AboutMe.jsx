import languages from "../constants/langugaes";
import technologies from "../constants/technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
        <div className="text-black m-10">
            <div className="grid lg:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src="/IMG_6418.JPG" alt="My photo" width={300} height={400} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center lg:text-start my-5 text-3xl lg:text-7xl">About Me</p>
                    <div className="grid grid-cols-2 text-sm lg:text-xl">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <p className="flex gap-2">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                <span>didarmaratov04@gmail.com</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} size="xl" /> +7 705 715 65 74
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} size="xl" /> Almaty, KZ
                            </p>
                        </div>
                        <div className="flex flex-col justify-center lg:items-start lg:py-[30%] gap-5">
                            <p className="flex flex-row-reverse gap-1">
                                <a href="https://github.com/ded-r" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="xl" />
                                </a>
                                <span>GitHub</span>
                            </p>
                            <p className="flex flex-row-reverse gap-1">
                                <a href="https://www.linkedin.com/in/didar-auyesbay-370b0a281/" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                </a>
                                <span>LinkedIn</span>
                            </p>
                            <p className="flex flex-row-reverse gap-1">
                                <a href="https://t.me/d3drrr" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTelegram} size="xl" />
                                </a>
                                <span>Telegram</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:w-3/4 mx-auto text-center my-14 text-lg border border-black rounded-lg lg:p-10 p-3">
                <p>
                    <b>
                        I am third year student at Suleyman Demirel University. As a future frontend developer, I bring a creative mindset. With a strong commitment to continuous learning and staying up-to-date with the latest industry trends, I am eager to contribute my skills and grow as a
                        professional frontend developer.
                    </b>
                </p>
            </div>
            <div>
                <p className="my-8 lg:my-16 text-center text-3xl lg:text-6xl">
                    <b>My Stack</b>
                </p>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
                    {technologies.map((tech, index) => (
                        <div key={index} className="m-auto text-center">
                            <img src={tech.logo} alt={tech.name} height={200} width={200} />
                            <b>{tech.name}</b>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="my-8 lg:my-16 text-center text-3xl lg:text-6xl">
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
            <div className="text-center text-2xl lg:text-4xl my-8 lg:my-20 underline underline-offset-8 transition ease-in-out duration-300 hover:text-blue-500 hover:scale-110">
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
