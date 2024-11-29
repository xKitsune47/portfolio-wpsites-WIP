import React from "react";
// import { useForm } from "react-hook-form";

import Header from "../components/Header";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export const Contact = ({ children }) => {
    return (
        <>
            <Header />
            <Banner tabName={"Kontakt"} />
            <div>contact</div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Masz do nas pytanie?"}
                tab={"Kontakt"}
            />
            <Footer></Footer>
        </>
    );
};
