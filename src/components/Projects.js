import React from "react";
import ProjectBox from "./ProjectBox";

export default function Projects({ children, projects }) {
    return (
        <div className="projects-container">
            <div className="projects-brief-description">
                <h3>
                    Wykonaliśmy dziesiątki stron, niektóre z nich podaliśmy
                    poniżej jako nasze portfolio.
                </h3>
            </div>
            <ProjectBox projects={projects} />
        </div>
    );
}
