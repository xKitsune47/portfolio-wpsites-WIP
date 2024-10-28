import React from "react";

export default function Button({ children, text, onClick, tab, customClass }) {
    return (
        <button
            className={`btn ${customClass}`}
            onClick={() => onClick(`${tab}`)}>
            {text}
        </button>
    );
}
