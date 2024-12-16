import { useState } from "react";

import React from "react";
import Header from "../components/Header";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { offers } from "../variables";
import { faq } from "../variables";

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

export default function Offer({
    children,
    offersList = offers(),
    faqList = faq(),
}) {
    const [index, setIndex] = useState(null);

    return (
        <>
            <Header />
            <Banner tabName={"Oferta"} />
            <div className="offer-container">
                <div className="pricing">
                    <Box className="pricing-box">
                        {offersList.map((offer) => {
                            return (
                                <Card
                                    size="lg"
                                    variant="outlined"
                                    className="price-card"
                                    key={offer.title}>
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
                                            return (
                                                <ListItem
                                                    key={item.slice(0, 10)}>
                                                    {item}
                                                </ListItem>
                                            );
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
                        {faqList.map((elem, i) => {
                            return (
                                <Accordion
                                    key={elem.question.slice(0, 10)}
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
            <Footer />
        </>
    );
}
