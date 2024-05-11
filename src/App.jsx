import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Nav />
                <RouterProvider router={router} />
                <Footer />
            </div>
        </>
    );
}

export default App;
