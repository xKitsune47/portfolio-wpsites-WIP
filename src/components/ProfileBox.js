import React from "react";

export default function DevsProfile({
    children,
    devs,
    sectionTitle = "Developers",
}) {
    children &&
        console.warn("DevsProfile component does not receive children prop");

    return (
        <div className="devs-box">
            <h2 className="devs-box__title">{sectionTitle}</h2>
            {devs.map((dev) => {
                console.log(dev);

                return (
                    <SingleDev
                        devName={dev.name}
                        devDesc={dev.description}
                        devImg={dev.image}
                        key={dev.name}></SingleDev>
                );
            })}
        </div>
    );
}

function SingleDev({ children, devName, devDesc, devImg }) {
    children &&
        console.warn("SingleDev sub-component does not receive children prop");
    return (
        <div className="single-dev">
            <img src={devImg} alt={devName} />
            <h3>{devName}</h3>
            <p>{devDesc}</p>
        </div>
    );
}
