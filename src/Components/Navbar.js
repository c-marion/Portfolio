

export default function Navbar(params) {
    return (
        <div className="navbar">
            {
                params && params.links && params.links.map((link, index) => {
                    return <a href={`#${link.addressId}`}>{link.name}</a>
                })
            }
        </div>
    );
}