import React from "react";
import DevsProfile from "../components/ProfileBox";
import Footer from "../components/Footer";
import ContactBox from "../components/ContactBox";
import Header from "../components/Header";
import Banner from "../components/Banner";

const placeholderPhoto =
    "https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AboutUs({ children, devs }) {
    return (
        <>
            <Header />
            <Banner tabName={"O nas"} />
            <div className="about-container">
                <div className="about-container-details">
                    <div className="about-container-details--element">
                        <h2>Hej!</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat esse sit quas pariatur recusandae
                            earum, et atque officia deserunt, labore,
                            voluptatibus dolorum quidem. Praesentium, neque
                            vitae necessitatibus et exercitationem a
                        </p>
                    </div>
                    <div className="about-container-details--element">
                        <img
                            src={placeholderPhoto}
                            alt="two programmers working"
                            className="about-container-details--img"
                        />
                    </div>
                </div>

                <DevsProfile devs={devs} />
            </div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Masz do nas pytanie?"}
                tab={"Kontakt"}
            />
            <Footer></Footer>
        </>
    );
}
