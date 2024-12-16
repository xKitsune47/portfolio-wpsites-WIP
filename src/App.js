import "./styles/App.css";
import "./styles/computer.css";
import "./styles/mobile.css";
// import { devs } from "./variables";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Offer from "./pages/Offer";
import { Homepage } from "./pages/Homepage";
// import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import Prepare from "./pages/Prepare";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route index element={<Homepage />} />
                    <Route path="/projekty" element={<Projects />} />
                    <Route path="/oferta" element={<Offer />} />
                    <Route path="/co-przygotowac" element={<Prepare />} />
                    {/* <Route path="/o-nas" element={<AboutUs devs={devs()} />} /> */}
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </BrowserRouter>
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
// - co przygotowac
// - kontakt
// box z przyciskiem do zakladki kontakt
// footer

// glowna:
// oferta (skrocona - kafelki)
// wywalic z headera

// co przygotowac:
// dac zamiast glownej w headerze
// lista z checkmarkami
// formularz podstawowy

// projekty:
// karuzela zamiast kafelkow, jeden zawsze z przodu, po bokach po jednym kafelku wylaniajacym sie zza glownego.
// po kliknieciu kafelek powieksza sie i pokazuje wiecej informacji nt. projektu
// https://www.npmjs.com/package/react-slideshow-image

// DONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONE
// oferta:
// 3 tiery oferty (jak subskrypcje)
// najczesciej zadawane pytania (format akordeonu)
// DONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONE

// kontakt:
// formularz podstawowy

// ---------------------------------

// formularz podstawowy:
// imie i nazwisko/nazwa firmy
// mail kontaktowy
// tresc

// DOKUMENT LH: 14, 17, 26, 30, 32, 37, 38, 62, 67, 70
