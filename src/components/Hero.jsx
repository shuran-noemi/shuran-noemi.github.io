import React from 'react';
import "../css/Hero.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FileText } from "lucide-react";
import { profile } from "../data/profileData";

function Hero() {
    const iconMap = {
        email: <MdEmail />,
        github: <FaGithub />,
        scholar: <FaGoogleScholar />,
        linkedin: <FaLinkedin />,
    };

    const handlePlaceholder = (event, isPlaceholder) => {
        if (isPlaceholder) event.preventDefault();
    };

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={profile.profilePhoto}
                    alt={`${profile.name} profile`}
                    className="profile-pic"
                />
                <div className="hero-meta">
                    <div className="hero-kicker">Hi, I am</div>
                    <div className="meta-name">{profile.name}</div>
                    <div className="meta-cn">{profile.chineseName}</div>
                    <div className="meta-role">{profile.roles.join(" · ")}</div>
                    <div className="meta-link">
                        <a
                            className={`meta-linkitem ${profile.cv.placeholder ? "is-placeholder" : ""}`}
                            href={profile.cv.href}
                            onClick={(event) => handlePlaceholder(event, profile.cv.placeholder)}
                            rel="noopener noreferrer"
                        >
                            <FileText size={16} />
                            {profile.cv.label}
                        </a>
                    </div>
                    <div className="contact-small">
                        {profile.links.map((item) => (
                            <a
                                key={item.type}
                                href={item.href}
                                onClick={(event) => handlePlaceholder(event, item.placeholder)}
                                rel="noopener noreferrer"
                                className={`icon-link ${item.placeholder ? "is-placeholder" : ""}`}
                                aria-label={item.label}
                                title={item.placeholder ? `${item.label} coming soon` : item.label}
                            >
                                {iconMap[item.type]}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/07/29</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
