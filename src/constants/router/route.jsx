import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";

export const ROUTES = [
    {
        path: "/",
        element: <AboutMe />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
];
