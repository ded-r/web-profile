import FeedbackForm from "./Feedback";

export default function Contact() {
    return (
        <div className="my-5 lg:flex-grow flex flex-col justify-center items-center text-black">
            <p className="text-2xl text-center lg:text-4xl">Leave some feedback :D</p>
            <p className="text-center text-2xl pt-5">Contact Form</p>
            <FeedbackForm />
        </div>
    );
}
