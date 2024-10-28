import React from "react";

const placeholderOffers = [
    {
        title: "Nazwa usługi",
        price: "99,99 zł",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.",
    },
];

export default function Offer({ children, offers = placeholderOffers }) {
    return (
        <div className="offer-container">
            <div></div>
        </div>
    );
}
