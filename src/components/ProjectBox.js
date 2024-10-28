import PropTypes from "prop-types";
import Button from "./Button";

ProjectBox.propTypes = {
    width: PropTypes.number,
    image: PropTypes.string,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    containerPadding: PropTypes.number,
    fontSize: PropTypes.number,
};

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
    const componentStyle = {
        minHeight: "fit-content",
        width: `${width}rem`,
        background: `linear-gradient(rgba(89, 201, 165, 1), rgba(47, 103, 94, 1)`,
        color: `${textColor}`,
        padding: `${containerPadding}rem`,
        textAlign: "center",
        margin: "auto",
    };

    children &&
        console.warn("ProjectBox component cannot receive children prop");

    const projectImageStyle = {
        width: `calc(${width}rem - ${containerPadding}rem)`,
    };
    const projectTitleStyle = {
        fontSize: `${fontSize * 2}rem`,
    };
    const projectDescriptionStyle = { fontSize: `${fontSize * 1.25}rem` };

    return (
        <div className="projects-box">
            {projects.map((project) => {
                return (
                    <SingleProject
                        componentStyle={componentStyle}
                        className={className}
                        image={project.image}
                        projectDescriptionStyle={projectDescriptionStyle}
                        projectImageStyle={projectImageStyle}
                        projectTitleStyle={projectTitleStyle}
                        text={project.text}
                        title={project.title}
                        key={project.title}></SingleProject>
                );
            })}
        </div>
    );
}

function SingleProject({
    children,
    componentStyle,
    className,
    image,
    projectDescriptionStyle,
    projectImageStyle,
    projectTitleStyle,
    text,
    title,
}) {
    return (
        <div style={componentStyle} className={className}>
            <img src={image} alt={image} style={projectImageStyle} />
            <h3 style={projectTitleStyle}>{title}</h3>
            <p style={projectDescriptionStyle}>{text}</p>
            <Button customClass={"btn-projects"} text={"Przejdź do strony"} />
        </div>
    );
}
