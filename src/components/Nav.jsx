import { useState, useEffect, useRef } from "react";

export default function Nav() {
    const routes = [
        { label: "Home", value: "" },
        { label: "About Me", value: "about" },
        { label: "Projects", value: "projects" },
        { label: "Contact", value: "contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const handleNavigation = (event) => {
        const selectedValue = event.target.getAttribute("data-value");
        if (selectedValue) {
            window.location.href = `/${selectedValue}`;
            setIsOpen(false); // Close dropdown
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div style={{ backgroundColor: "#7AB2B2" }}>
            <div className="hidden lg:flex justify-end text-2xl py-5 px-10 space-x-20 shadow-xl">
                {/* <li> */}
                <a href="/" className="hover:underline hover:underline-offset-8">
                    Home
                </a>
                {/* </li> */}
                {/* <li> */}
                <a href="/about" className="hover:underline hover:underline-offset-8">
                    About Me
                </a>
                {/* </li> */}
                {/* <li> */}
                <a href="/projects" className="hover:underline hover:underline-offset-8">
                    Projects
                </a>
                {/* </li> */}
                {/* <li> */}
                <a href="/contact" className="hover:underline hover:underline-offset-8">
                    Contact
                </a>
                {/* </li> */}
            </div>
            <div className="flex lg:hidden justify-between text-2xl p-5 space-x-20 shadow-xl">
                <p>AD Portfolio</p>
                <div className="flex" ref={dropdownRef}>
                    <button type="button" id="options-menu" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                        ≡
                    </button>
                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {routes.map((route) => (
                                    <a key={route.value} href={`/${route.value}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" data-value={route.value} onClick={handleNavigation} role="menuitem">
                                        {route.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* <label>
                    ≡
                    <select onChange={handleNavigation} className="border rounded-lg p-2">
                        <option value="">Select a route</option>
                        {routes.map((route) => (
                            <option key={route.value} value={route.value}>
                                {route.label}
                            </option>
                        ))}
                    </select>
                </label> */}
            </div>
        </div>
    );
}
