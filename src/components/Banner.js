import React from "react";

export default function Banner({
    children,
    tabName,
    companyName = "logo-ipsum",
}) {
    return (
        <div className="banner">
            <h1>
                {tabName === "main" && `${companyName}`}
                {tabName === "projects" && "Projekty"}
                {tabName === "offer" && "Oferta"}
                {tabName === "about" && "O nas"}
                {tabName === "contact" && "Kontakt"}
            </h1>
        </div>
    );
}
