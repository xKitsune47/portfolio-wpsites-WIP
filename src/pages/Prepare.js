import Header from "../components/Header";
import Banner from "../components/Banner";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import { prepare } from "../variables";

function Prepare({ prepareList = prepare() }) {
    return (
        <>
            <Header />
            <Banner tabName={"Co przygotować?"} />
            <div className="prepare-container">what to prepare</div>
            <ContactBox
                btnText={"Skontaktuj się z nami!"}
                question={"Nie znalazłeś/aś odpowiedzi?"}
                tab={"Kontakt"}
            />
            <Footer />
        </>
    );
}

export default Prepare;
