import "../App.css";
import Portfolio from "../Components/Portfolio";
import SelfDescription from "../Components/SelfDescription";


export default function Mainpage() {
    return (
        <div className="main-container">
            <SelfDescription/>
            <Portfolio/>
        </div>
    )
}