

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