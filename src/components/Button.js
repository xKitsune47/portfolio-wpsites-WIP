import React from "react";
import { NavLink } from "react-router-dom";

export default function Button({ children, text, tab, customClass }) {
    return (
        <NavLink to={`/${tab}`}>
            <button className={`btn ${customClass}`}>{text}</button>
        </NavLink>
    );
}
