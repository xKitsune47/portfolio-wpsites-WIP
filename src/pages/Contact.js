import React from "react";
// import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export const Contact = ({ children }) => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <Banner tabName={"Kontakt"} />
            <div className="contact">
                <h2>Skontaktuj się!</h2>
                <form onSubmit={(e) => handleSubmit(e)} className="form">
                    <input
                        type="text"
                        placeholder="Imię i nazwisko/nazwa firmy"
                    />
                    <input type="mail" placeholder="E-mail" />
                    <textarea rows={5} placeholder="Wiadomość" />
                    <input type="submit" className="btn" value="Wyślij"></input>
                </form>
            </div>
            <Footer />
        </>
    );
};
