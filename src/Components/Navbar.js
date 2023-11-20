

export default function Navbar(params) {
    return (
        <div className="navbar">
            {
                params && params.link && params.links.map((link, index) => {
                    return <a href={`#${link.addressId}`}>{link.name}</a>
                })
            }
        </div>
    );
}