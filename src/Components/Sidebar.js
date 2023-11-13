import "../App.css";

/**
 * A big bar container that is situated on the edge of the screen.
 * @param props id.
 */
export default function Sidebar(props) {
    return (
        <div className="sidebar-container" id={props.id}/>
    );
}