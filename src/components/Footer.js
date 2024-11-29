import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ children }) {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-element">
                    <NavLink to="/">
                        <span>Strona główna</span>
                    </NavLink>
                    <NavLink to="/projekty">
                        <span>Projekty</span>
                    </NavLink>
                    <NavLink to="/oferta">
                        <span>Oferta</span>
                    </NavLink>
                    <NavLink to="/o-nas">
                        <span>O nas</span>
                    </NavLink>
                    <NavLink to="/kontakt">
                        <span>Kontakt</span>
                    </NavLink>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>© 2024 Franciszek Cybruch</p>
            </div>
        </footer>
    );
}
