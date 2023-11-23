import Aboutme from "./Aboutme";
import Navbar from "../Navbar";
import Title from "../Title";
import Skills from "./Skills";
import Projects from "./Projects";


/**
 * The "root" page of the website.
 */
export default function Mainpage() {
    return (
        <>
            <div className="main-container">
                <Navbar links={[
                        { name: "Caden Marion", addressId: "title", id: "navbar-btn-title" },
                        { name: "Skills", addressId: "skills" },
                        { name: "About", addressId: "about" },
                        { name: "Projects", addressId: "projects" }
                    ]}/>
                <Title/>
                <Aboutme/>
                <Skills languages={[
                    { language: "csharp", languageName: "C#" },
                    { language: "java", languageName: "Java" },
                    { language: "kotlin", languageName: "Kotlin" },
                    { language: "javascript", languageName: "JavaScript" },
                    { language: "nodejs", languageName: "Node JS" },
                    { language: "react", languageName: "React" },
                    { language: "bash", languageName: "Bash" },
                    { language: "microsoftsqlserver", languageName: "SQL Server" },
                    { language: "html5", languageName: "HTML" },
                    { language: "css3", languageName: "CSS" }
                ]}/>
                <Projects/>
            </div>
        </>
    )
}