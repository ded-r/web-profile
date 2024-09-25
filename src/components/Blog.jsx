export default function Blog() {
    return (
        <div style={{ backgroundImage: "url('/README.jpg')", backgroundSize: "cover" }} className="flex flex-col flex-grow">
            <div className="my-5 text-center text-white">
                <div className="text-2xl">
                    <p>Blog</p>
                </div>
                <div className="my-4 w-2/3 mx-auto">
                    <div className="my-4 py-4 border rounded">"Strong people always the kind ones, but not all of kind people are strong."</div>
                </div>
            </div>
        </div>
    );
}
