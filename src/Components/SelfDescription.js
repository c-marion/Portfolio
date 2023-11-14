import "../App.css";
import LoremIpsum from "./LoremIpsum";

/**
 * The container with all of the personal (to an extent) information about me (Caden).
 */
export default function SelfDescription() {
    return (
        <div className="inner-container" id="self-description">
            <h1 className="portfolio-header">Caden Marion</h1>

            <div className="self-description-inner-container">
                <h3>About Me</h3>
                <LoremIpsum/>
            </div>
        </div>
    )
}