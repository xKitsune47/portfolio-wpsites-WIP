import React from "react";
import Button from "./Button";

export default function ContactBox({ children, btnText, question, tab }) {
    return (
        <div className="contact-box">
            <h3>{question}</h3>
            <Button text={btnText} tab={tab} />
        </div>
    );
}
