import Home from "../../components/Home";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import NotFound from "../../components/NotFound";
import Blog from "../../components/Blog";

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
        path: "/blog",
        element: <Blog />,
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
