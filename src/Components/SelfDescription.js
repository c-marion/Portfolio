import "../App.css";
import LoremIpsum from "./LoremIpsum";

/**
 * The container with all of the personal (to an extent) information about me (Caden).
 */
export default function SelfDescription() {
    return (
        <div className="inner-container" id="self-description">
            <h2 className="portfolio-header">Self</h2>
            <LoremIpsum/>
        </div>
    )
}