import React from "react";
import Button from "./Button";

export default function ContactBox({
    children,
    onClick,
    btnText,
    question,
    tab,
}) {
    return (
        <div className="contact-box">
            <h3>{question}</h3>
            <Button text={btnText} onClick={onClick} tab={tab} />
        </div>
    );
}
