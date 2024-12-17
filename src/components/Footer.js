import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ children }) {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-element">
                    <NavLink to="/portfolio-wpsites-WIP/">
                        <span>Strona główna</span>
                    </NavLink>
                    <NavLink to="/portfolio-wpsites-WIP/projekty">
                        <span>Projekty</span>
                    </NavLink>
                    <NavLink to="/portfolio-wpsites-WIP/oferta">
                        <span>Oferta</span>
                    </NavLink>
                    {/* <NavLink to="/o-nas">
                        <span>O nas</span>
                    </NavLink> */}
                    <NavLink to="/portfolio-wpsites-WIP/co-przygotowac">
                        <span>Co przygotować?</span>
                    </NavLink>
                    <NavLink to="/portfolio-wpsites-WIP/kontakt">
                        <span>Kontakt</span>
                    </NavLink>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>© {new Date().getFullYear()} Franciszek Cybruch</p>
            </div>
        </footer>
    );
}
