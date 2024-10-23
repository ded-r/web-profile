import FeedbackForm from "./Feedback";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import RatingReview from "../utils/RatingReview";

export default function Contact() {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

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
        <div className="my-5 lg:flex-grow flex flex-col justify-center items-center text-black">
            <p className="text-2xl text-center lg:text-4xl">Leave some feedback :D</p>
            <p className="text-center text-2xl pt-5">Contact Form</p>
            <FeedbackForm />
            <div className="my-5 w-full">
                <p className="my-4 text-2xl text-center">Recent reviews</p>
                <div className="w-full grid lg:grid-cols-2">
                    <div className="mx-10">
                        <div className="m-5 border border-black rounded p-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faUser} />
                                    <p className="ml-3">Anonymous</p>
                                </div>
                                <div>
                                    <RatingReview rating={rating} setRating={setRating} />
                                </div>
                            </div>
                            <div className="italic">"Good website!"</div>
                        </div>
                    </div>
                    <div className="mx-10">
                        <div className="text-center w-2/3 mx-auto">
                            <div className="mb-4">
                                <label className="text-sm">Name</label>
                                <input type="name" id="name" value={name} name="from_name" className="w-full py-1 px-3 rounded border border-gray-300 text-black" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm">Message</label>
                                <textarea id="message" value={message} name="message" className="h-32 py-1 px-3 w-full resize-none rounded border border-gray-300 text-black" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="my-3">
                                <RatingReview rating={rating} setRating={setRating} />
                            </div>
                            <button className="rounded border-0 bg-green-600 py-2 px-6 text-lg text-white hover:bg-green-700 focus:outline-none transition duration-200" onClick={sendEmail}>
                                Put a review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
