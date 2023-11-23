import Aboutme from "./Aboutme";
import Navbar from "../Navbar";
import Title from "../Title";


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