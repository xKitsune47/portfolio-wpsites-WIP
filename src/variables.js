const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.";

const placeholderProjectImage =
    "https://kep.cdn.index.hu/1/0/5611/56118/561184/56118487_9913ecfec23e5b64d1e256573d280a0f_wm.jpg";

const placeholderDevImage =
    "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg";

function faq() {
    return [
        {
            question: "question 1",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget urna quis lacus aliquam rhoncus vel at turpis.",
        },
        {
            question: "question 2",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget urna quis lacus aliquam rhoncus vel at turpis.",
        },
        {
            question: "question 3",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget urna quis lacus aliquam rhoncus vel at turpis.",
        },
    ];
}

function devs() {
    return [
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
}

function offers() {
    return [
        {
            title: "Nazwa usługi",
            price: "99,99 zł",
            description: [
                "Lorem ipsum dolor sit amet",
                "Nunc eget urna quis",
                "Aenean gravida semper",
            ],
        },
        {
            title: "Nazwa usługi",
            price: "99,99 zł",
            description: [
                "Lorem ipsum dolor sit amet",
                "Nunc eget urna quis",
                "Aenean gravida semper",
            ],
        },
        {
            title: "Nazwa usługi",
            price: "99,99 zł",
            description: [
                "Lorem ipsum dolor sit amet",
                "Nunc eget urna quis",
                "Aenean gravida semper",
            ],
        },
    ];
}

function projects() {
    return [
        {
            image: placeholderProjectImage,
            text: placeholderText,
            title: "Project Title1",
            link: "https://github.com/xKitsune47",
        },
        {
            image: placeholderProjectImage,
            text: placeholderText,
            title: "Project Title2",
            link: "https://github.com/xKitsune47",
        },
        {
            image: placeholderProjectImage,
            text: placeholderText,
            title: "Project Title3",
            link: "https://github.com/xKitsune47",
        },
    ];
}

function prepare() {
    return [];
}

function aboutBanner() {
    return {
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse sit quas pariatur recusandae earum, et atque officia deserunt, labore, voluptatibus dolorum quidem. Praesentium, neque vitae necessitatibus et exercitationem",
        image: "https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
}

export { faq, projects, devs, offers, prepare, aboutBanner };
