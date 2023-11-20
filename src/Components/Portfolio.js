import "../App.css";
import LoremIpsum from "./LoremIpsum";

/**
 * The container with all of the professional information about me (Caden).
 */
export default function Portfolio() {
    return (
        <div className="inner-container" id="portfolio-container">
            <h2 className="portfolio-header">Portfolio</h2>
            <hr/>
            <LoremIpsum/>
        </div>
    )
}