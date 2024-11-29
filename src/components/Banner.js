import React from "react";

export default function Banner({
    children,
    tabName,
    companyName = "logo-ipsum",
}) {
    return (
        <div className="banner">
            <h1>{tabName || companyName}</h1>
        </div>
    );
}
