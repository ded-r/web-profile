import { useState } from "react";

export default function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mx-auto flex flex-col p-8">
                <div className="mb-4">
                    <label className="text-sm">Name</label>
                    <input type="name" id="name" value={name} name="name" className="w-full py-1 px-3 rounded border border-gray-300 text-black" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="text-sm">Email</label>
                    <input type="email" id="email" value={email} name="email" className="w-full py-1 px-3 rounded border border-gray-300 text-black" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="text-sm">Message</label>
                    <textarea id="message" value={message} name="message" className="h-32 py-1 px-3 w-full resize-none rounded border border-gray-300 text-black" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" onClick={handleSubmit}>
                    Send
                </button>
                <p className="mt-3 text-xs text-gray-500">Feel free to connect with me on social media platforms</p>
            </div>
        </form>
    );
}
