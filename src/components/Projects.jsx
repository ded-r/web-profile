export default function Projects() {
    return (
        <div className="my-5 text-center">
            <h1 className="text-2xl">Projects</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-flow-row">
                    <div className="my-5 grid grid-cols-2 lg:grid-cols-3">
                        <div className="text-center hover:text-blue-500 duration-300 hover:scale-105">
                            <a href="https://didar-weather.netlify.app/" target="_blank">
                                <p>Simple Weather App</p>
                                <img src="/Screenshot 2024-09-20 at 13.17.41.png" alt="" width={350} height={200} />
                            </a>
                        </div>
                        <p>Project 2</p>
                        <p>Project 3</p>
                        <p>Project 4</p>
                        <p>Project 5</p>
                        <p>Project 6</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
