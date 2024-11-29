import React from "react";
import Header from "../components/Header";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import AboutBanner from "../components/AboutBanner";
import Button from "../components/Button";

export const Homepage = ({ children }) => {
    return (
        <>
            <Header></Header>
            <Banner />
            <div className="homepage">
                <AboutBanner>
                    <Button text={"Dowiedz się więcej"} tab="o-nas" />
                </AboutBanner>
            </div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Masz do nas pytanie?"}
                tab={"Kontakt"}
            />
            <Footer></Footer>
        </>
    );
};
