import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";

const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.";

const placeholderProjectImage =
    "https://kep.cdn.index.hu/1/0/5611/56118/561184/56118487_9913ecfec23e5b64d1e256573d280a0f_wm.jpg";

const placeholderDevImage =
    "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg";

const devs = [
    {
        name: "Franciszek Cybruch",
        description: placeholderText,
        image: placeholderDevImage,
    },
    {
        name: "Jakub Turowski",
        description: placeholderText,
        image: placeholderDevImage,
    },
];

const projects = [
    {
        image: placeholderProjectImage,
        text: placeholderText,
        title: "Project Title1",
    },
    {
        image: placeholderProjectImage,
        text: placeholderText,
        title: "Project Title2",
    },
    {
        image: placeholderProjectImage,
        text: placeholderText,
        title: "Project Title3",
    },
];

const offers = [
    {
        title: "Nazwa usługi",
        price: "99,99 zł",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.",
    },
];

export default function App() {
    const [curTab, setCurTab] = useState("main");

    function handleClick(tab) {
        setCurTab(tab);
        return;
    }

    return (
        <div className="App">
            <Header onChangeTab={handleClick}></Header>
            <Banner tabName={curTab}></Banner>
            {curTab === "main" && <p>{curTab}</p>}
            {curTab === "projects" && <Projects projects={projects} />}
            {curTab === "offer" && <Offer offers={offers}></Offer>}
            {curTab === "about" && <AboutUs devs={devs} />}
            {curTab === "contact" && <p>{curTab}</p>}
            <ContactBox
                onClick={handleClick}
                btnText={"Skontaktuj się z nami!"}
                question={"Masz do nas pytanie?"}
                tab={"contact"}
            />
            <Footer onChangeTab={handleClick}></Footer>
        </div>
    );
}

// TODO
// dokonczyc oferte:
// - biale tlo, element boxy z gradientem z bialym tekstem: nazwa, ponizej cena, ponizej krotki opis
// - ponizej wypisac cennik jak na fachmanie
//   (JSem obliczac ilosc znakow i dodawac dynamicznie kropki zeby bylo rowno)
//   cos pomyslec jaka kolorystyke ogarnac (ni chuja nie wiem XD)
// dokonczyc "o nas":
// - dodac element z bialym tlem, po lewej dodac element z h2 i paragrafem, po prawej
//   dodac jakies zdjecie???

// struktura strony:
// header
// banner z nazwa zakladki
// - main
// - projekty
// - oferta
// - o nas
// - kontakt
// box z przyciskiem do zakladki kontakt
// footer
