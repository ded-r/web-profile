import "./App.css";
import Nav from "./components/Nav";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router";

function App() {
    return (
        <>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-start-3 col-end-11 border border-white shadow-xl rounded-lg mt-5 p-5">
                    <Nav />
                </div>
                <div className="col-start-3 col-end-5 border border-white shadow-xl rounded-lg p-5">Menu</div>
                <div className="col-span-6 border border-white shadow-xl rounded-lg p-5">
                    <RouterProvider router={router} />
                </div>
            </div>
        </>
    );
}

export default App;
