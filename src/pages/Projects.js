import React from "react";
import ProjectBox from "../components/ProjectBox";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Projects({ children }) {
    return (
        <>
            <Header />
            <Banner tabName={"Projekty"} />
            <div className="projects-container">
                <div className="projects-brief-description">
                    <h3>
                        Oto lista stron które wykonaliśmy, i które mogą posłużyć
                        Państwu jako wzór.
                    </h3>
                </div>
                <ProjectBox />
            </div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Masz do nas pytanie?"}
                tab={"Kontakt"}
            />
            <Footer />
        </>
    );
}
