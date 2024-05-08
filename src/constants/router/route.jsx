import Home from "../../components/Home";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import NotFound from "../../components/NotFound";

export const ROUTES = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <AboutMe />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
