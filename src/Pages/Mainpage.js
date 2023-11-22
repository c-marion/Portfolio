import "../App.css";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";


/**
 * The "root" page of the website.
 */
export default function Mainpage() {
    return (
        <>
            <Navbar links={[
                    { name: "Skills", addressId: "skills" },
                    { name: "About", addressId: "about" },
                    { name: "Projects", addressId: "projects" }
                ]}/>
            <div className="outer-container">
                <div className="main-container">
                    <Title/>
                </div>
            </div>
        </>
    )
}