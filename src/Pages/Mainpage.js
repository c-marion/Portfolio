import "../App.css";
import Portfolio from "../Components/Portfolio";
import SelfDescription from "../Components/SelfDescription";
import Sidebar from "../Components/Sidebar";


/**
 * The "root" page of the website.
 */
export default function Mainpage() {
    return (
        <div className="outer-container">
            <Sidebar/>
            <Sidebar id="sidebar-container-right"/>
            <div className="main-container">
                <SelfDescription/>
                <Portfolio/>
            </div>
        </div>
    )
}