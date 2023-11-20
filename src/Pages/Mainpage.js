import "../App.css";
import Portfolio from "../Components/Portfolio";
import SelfDescription from "../Components/SelfDescription";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";


/**
 * The "root" page of the website.
 */
export default function Mainpage() {
    return (
        <div className="outer-container">
            <div className="main-container">
                <Navbar links={[
                    { name: "Skills", addressId: "skills" }
                ]}/>
            </div>
        </div>
    )
}