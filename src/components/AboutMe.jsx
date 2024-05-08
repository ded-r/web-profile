export default function AboutMe() {
    return (
        <div className="h-screen text-white m-10">
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src="public/IMG_6418.JPG" alt="My photo" width={300} height={400} />
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-9xl">About Me</p>
                </div>
            </div>
            <div>
                <ul>
                    <li>- 🔭 I amm currently working on [web-profile](https://github.com/ded-r/web-profile)</li>
                    <li>- 🌱 I am currently learning **ReactJS**</li>
                    <li>- 📫 How to reach me **didarmaratov04@gmail.com**</li>
                </ul>
            </div>
        </div>
    );
}
