import { useState } from "react";

import React from "react";
import Header from "../components/Header";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Button from "../components/Button";

// joy mui for all
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

// accordion
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

// pricing
import CardActions from "@mui/joy/CardActions";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

const placeholderOffers = [
    {
        title: "Nazwa usługi",
        price: "99,99 zł",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.",
    },
];
const placeholderFaq = [
    {
        question: "question 1",
        answer: "answer1",
    },
    {
        question: "question 2",
        answer: "answer2",
    },
];

export default function Offer({
    children,
    offers = placeholderOffers,
    faq = placeholderFaq,
}) {
    const [index, setIndex] = useState(null);

    return (
        <>
            <Header />
            <Banner tabName={"Oferta"} />
            <div className="offer-container">
                <div className="pricing">
                    <Box className="pricing-box">
                        {offers.map((offer) => {
                            return (
                                <Card
                                    size="lg"
                                    variant="outlined"
                                    className="price-card">
                                    <Typography level="h2">
                                        {offer.title}
                                    </Typography>
                                    <Divider inset="none" />
                                    <List
                                        size="sm"
                                        sx={{
                                            mx: "calc(-1 * var(--ListItem-paddingX))",
                                        }}>
                                        {offer.description.map((item) => {
                                            return <ListItem>{item}</ListItem>;
                                        })}
                                    </List>
                                    <Divider inset="none" />
                                    <CardActions>
                                        <Typography
                                            level="title-lg"
                                            sx={{ mr: "auto" }}>
                                            {offer.price}
                                        </Typography>
                                        <Button
                                            text={"Kontakt"}
                                            tab={"kontakt"}
                                            customClass={"btn-buy"}
                                        />
                                    </CardActions>
                                </Card>
                            );
                        })}
                    </Box>
                </div>
                <div className="accordions">
                    <h2>Często zadawane pytania</h2>
                    <AccordionGroup>
                        {faq.map((elem, i) => {
                            return (
                                <Accordion
                                    expanded={index === i}
                                    onChange={(event, expanded) => {
                                        setIndex(expanded ? i : null);
                                    }}
                                    className="accordion-custom">
                                    <AccordionSummary className="accordion-header">
                                        {elem.question}
                                    </AccordionSummary>
                                    <AccordionDetails className="accordion-details">
                                        {elem.answer}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </AccordionGroup>
                </div>
            </div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Nie znalazłeś/aś odpowiedzi?"}
                tab={"Kontakt"}
            />
            <Footer></Footer>
        </>
    );
}
