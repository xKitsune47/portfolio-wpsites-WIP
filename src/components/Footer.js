import React from "react";

export default function Footer({ children, onChangeTab }) {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-element">
                    <span
                        onClick={() => {
                            onChangeTab("main");
                        }}>
                        Strona główna
                    </span>
                    <span
                        onClick={() => {
                            onChangeTab("projects");
                        }}>
                        Projekty
                    </span>
                    <span
                        onClick={() => {
                            onChangeTab("offer");
                        }}>
                        Oferta
                    </span>
                    <span
                        onClick={() => {
                            onChangeTab("about");
                        }}>
                        O nas
                    </span>
                    <span
                        onClick={() => {
                            onChangeTab("contact");
                        }}>
                        Kontakt
                    </span>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>© 2024 Franciszek Cybruch</p>
            </div>
        </footer>
    );
}
