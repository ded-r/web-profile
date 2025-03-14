export default function Projects() {
    return (
        <div className="flex flex-col flex-grow">
            <div className="my-5 text-center">
                <h1 className="text-2xl">Projects</h1>
                <div className="flex justify-center items-center">
                    <div className="grid grid-flow-row">
                        <div className="my-5 grid grid-cols-2 lg:grid-cols-3">
                            <div className="text-center hover:text-blue-500 duration-300 hover:scale-105">
                                <a href="https://weather-v2-didar.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <p>Simple Weather App</p>
                                    <img src="/Screenshot 2024-09-20 at 13.17.41.png" alt="" width={350} height={200} />
                                </a>
                            </div>
                            <div className="text-center hover:text-blue-500 duration-300 hover:scale-105">
                                <a href="https://connect-in-production.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <p>ConnectIn - Collaborative platform for efficient team formation</p>
                                    <img src="/Screenshot 2025-02-19 at 18.28.43.png" alt="" width={350} height={200} />
                                </a>
                                <a href="https://github.com/ded-r/ConnectIn" target="_blank" rel="noopener noreferrer">
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
