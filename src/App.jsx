import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router";

function App() {
    return (
        <>
            {/* <div className="grid grid-cols-12 gap-5">
                <div className="col-start-3 col-end-11 border border-blue-500 shadow-xl rounded-lg mt-5 p-5">
                    <Nav />
                </div>
                <div className="col-start-3 col-end-5 border border-blue-500 shadow-xl rounded-lg p-5">Menu</div>
                <div className="col-span-6 border border-blue-500 shadow-xl rounded-lg p-5">
                    <RouterProvider router={router} />
                </div>
            </div> */}
            <div>
                <Nav />
                <RouterProvider router={router} />
                <Footer />
            </div>
        </>
    );
}

export default App;
