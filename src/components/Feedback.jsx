import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    useEffect(() => emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY), []);

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log("Email sent successfully", result);
                setIsSent(true);
            },
            (error) => {
                console.log("Error sending email:", error);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="mx-auto flex flex-col py-2">
                {isSent && (
                    <div className="py-1 my-2 text-center border bg-green-400 rounded">
                        <p>Thank you for your feedback!</p>
                    </div>
                )}
                <div className="mb-4">
                    <label className="text-sm">Name</label>
                    <input type="name" id="name" value={name} name="from_name" className="w-full py-1 px-3 rounded border border-gray-300 text-black" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="text-sm">Email</label>
                    <input type="email" id="email" value={email} name="from_email" className="w-full py-1 px-3 rounded border border-gray-300 text-black" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="text-sm">Message</label>
                    <textarea id="message" value={message} name="message" className="h-32 py-1 px-3 w-full resize-none rounded border border-gray-300 text-black" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="rounded border-0 bg-green-600 py-2 px-6 text-lg text-white hover:bg-green-700 focus:outline-none transition duration-200" onClick={sendEmail}>
                    Send
                </button>
                <p className="mt-3 text-xs text-gray-500">Feel free to connect with me on social media platforms</p>
                <div className="flex justify-between p-3">
                    <a href="https://github.com/ded-r" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="https://www.instagram.com/dd.mrtv/" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/didar-auyesbay-370b0a281/" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a href="https://t.me/d3drrr" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} size="xl" />
                    </a>
                </div>
            </div>
        </form>
    );
}
