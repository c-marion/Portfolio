import "../App.css";
import Aboutme from "../Components/Aboutme";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";


/**
 * The "root" page of the website.
 */
export default function Mainpage() {
    return (
        <>
            <div className="main-container">
                <Navbar links={[
                        { name: "Skills", addressId: "skills" },
                        { name: "About", addressId: "about" },
                        { name: "Projects", addressId: "projects" }
                    ]}/>
                <Title/>
                <Aboutme/>
            </div>
        </>
    )
}