
function scrollToElement(event) {
    const addressElement = document.getElementById(event.target.name);
    addressElement.scrollIntoView({ behavior: 'smooth',  });
}


/**
 * A navigation bar that sends the user to different parts of the page.
 * @param {Object} params Parameters for the react component. To add navbar items, put a links array property of { name, addressId } objects.
 */
export default function Navbar(params) {
    return (
        <div className="navbar">
            {
                params && params.links && params.links.map((link, index) => {
                    return <button className="navbar-btn" name={link.addressId} onClick={scrollToElement}>{link.name}</button>
                })
            }
        </div>
    );
}