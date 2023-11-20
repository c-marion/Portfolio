

/**
 * A navigation bar that sends the user to different parts of the page.
 * @param {Object} params Parameters for the react component. To add navbar items, put a links array property of { name, addressId } objects.
 */
export default function Navbar(params) {
    return (
        <div className="navbar">
            {
                params && params.links && params.links.map((link, index) => {
                    return <button className="navbar-btn" href={`#${link.addressId}`}>{link.name}</button>
                })
            }
        </div>
    );
}