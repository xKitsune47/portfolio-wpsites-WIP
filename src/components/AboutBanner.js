import React from "react";
import { aboutBanner } from "../variables";

function AboutBanner({ children }) {
    const info = aboutBanner();

    return (
        <div className="about-container-details">
            <div className="about-container-details--element">
                <h2>Hej!</h2>
                <p>{info.description}</p>
                {children}
            </div>
            <div className="about-container-details--element">
                <img
                    src={info.image}
                    alt="two programmers working"
                    className="about-container-details--img"
                />
            </div>
        </div>
    );
}

export default AboutBanner;
