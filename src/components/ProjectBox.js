import { projects } from "../variables";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectBox({
    children,
    width = 20,
    projectsList = projects(),
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
                {projectsList.map((item) => {
                    return (
                        <a
                            href={item.link}
                            className="singe-project"
                            key={item.title}>
                            <img
                                src={item.image}
                                alt={item.title}
                                lazy-load="true"
                            />
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
