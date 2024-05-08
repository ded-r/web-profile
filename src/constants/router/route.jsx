import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import NotFound from "../../components/NotFound";

export const ROUTES = [
    {
        path: "/",
        element: <AboutMe />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
