import LoremIpsum from "./LoremIpsum";

/**
 * The first component you see on the website, complete with a name, personal description, and more.
 */
export default function Title() {
    return (
        <div className="title-container">
            <h1 className="title-heading">Caden Marion</h1>
            <h3 className="title-subheading"><LoremIpsum/></h3>
        </div>
    )
}