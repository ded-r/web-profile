import FeedbackForm from "./Feedback";

export default function Contact() {
    return (
        <div className="flex-grow flex flex-col justify-center items-center text-black">
            <p className="text-4xl text-center">Leave some feedback :D</p>
            <p className="text-center text-2xl pt-5">Contact Form</p>
            <FeedbackForm />
        </div>
    );
}
