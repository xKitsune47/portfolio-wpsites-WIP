import PropTypes from "prop-types";
import Button from "./Button";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const placeholderImage =
    "https://kep.cdn.index.hu/1/0/5611/56118/561184/56118487_9913ecfec23e5b64d1e256573d280a0f_wm.jpg";

const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie odio interdum volutpat feugiat. Praesent sed nisl vel neque pellentesque convallis vitae at neque. Cras imperdiet massa eu lobortis efficitur. Suspendisse potenti. Aenean non nibh scelerisque, cursus dolor nec, vehicula orci. Vivamus blandit velit quis sem imperdiet feugiat.";

const placeholderProjects = [
    { image: placeholderImage, text: placeholderText, title: "Project Title1" },
    { image: placeholderImage, text: placeholderText, title: "Project Title2" },
    { image: placeholderImage, text: placeholderText, title: "Project Title3" },
];

export default function ProjectBox({
    children,
    width = 20,
    projects = placeholderProjects,
    textColor = "white",
    containerPadding = 2,
    className = "project-container",
    fontSize = 1,
}) {
    children &&
        console.warn("ProjectBox component cannot receive children prop");

    return (
        <div className="projects-box">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode
                className="carousel-custom"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 2,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                {projects.map((item) => {
                    return (
                        <a href={item.link} className="singe-project">
                            <img src={placeholderImage} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </a>
                    );
                })}
            </Carousel>
        </div>
    );
}

// function SingleProject({
//     children,
//     componentStyle,
//     className,
//     image,
//     projectDescriptionStyle,
//     projectImageStyle,
//     projectTitleStyle,
//     text,
//     title,
// }) {
//     return (
//         <div style={componentStyle} className={className}>
//             <img src={image} alt={image} style={projectImageStyle} />
//             <h3 style={projectTitleStyle}>{title}</h3>
//             <p style={projectDescriptionStyle}>{text}</p>
//             <Button customClass={"btn-projects"} text={"Przejdź do strony"} />
//         </div>
//     );
// }
