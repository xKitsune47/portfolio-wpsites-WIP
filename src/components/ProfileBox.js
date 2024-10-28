import React from "react";

const placeholderDevs = [
    {
        name: "Penny Tool",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus ac justo ut lobortis. Vestibulum placerat nisi eu gravida pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec ipsum sit amet mauris feugiat rutrum sed ac nisi.",
        image: "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg",
    },
    {
        name: "Claire Voyant",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus ac justo ut lobortis. Vestibulum placerat nisi eu gravida pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec ipsum sit amet mauris feugiat rutrum sed ac nisi.",
        image: "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg",
    },
];

const imageStyle = {
    height: "20vh",
};

const devsBoxStyle = {
    display: "grid",
    width: "100%",
    margin: "auto",
    minHeight: "50vh",
    height: "fit-content",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "5rem 1fr",
    background:
        "linear-gradient(130deg, rgba(47,103,94,1) 25%, rgba(89,201,165,1) 100%)",
};

const singleDevStyle = {
    minHeight: "450px",
    height: "fit-content",
    margin: "4rem",
    padding: "2rem",
    textAlign: "center",
    background: "#ffffff",
};

export default function DevsProfile({
    children,
    devs = placeholderDevs,
    sectionTitle = "Developers",
}) {
    children &&
        console.warn("DevsProfile component does not receive children prop");

    return (
        <div style={devsBoxStyle}>
            <h2
                style={{
                    textAlign: "center",
                    color: "#ffffff",
                    gridRowStart: "1",
                    gridColumnStart: "1",
                    gridRowEnd: "2",
                    gridColumnEnd: "3",
                }}>
                {sectionTitle}
            </h2>
            {devs.map((dev) => {
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
        <div style={singleDevStyle}>
            <img src={devImg} alt={devName} style={imageStyle} />
            <h3>{devName}</h3>
            <p>{devDesc}</p>
        </div>
    );
}
