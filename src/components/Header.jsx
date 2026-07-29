import React, { useState } from "react";
import "../css/Header.css";
import personalLogo from "../assets/personal-logo.png";

const NAV = [
    { id: "about", label: "About" },
    { id: "news", label: "News" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "activities", label: "Activities" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-container">
                <div className="header-name">
                    <img className="brand-mark" src={personalLogo} alt="Shuran Fan logo" />
                    <div className="name-main">Shuran Fan</div>
                </div>

                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </button>

                <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className="nav-item"
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
