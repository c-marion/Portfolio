

export default function Aboutme() {
    return (
        <div className="aboutme-container" id="about">
            <img src={process.env.PUBLIC_URL + "/Portrait.png"} className="aboutme-portrait"/>

            <div className="aboutme-paragraph-container">
                <h2 className="aboutme-heading">About Me</h2>
                <p className="aboutme-paragraph">
                    My name is Caden Marion. I'm a computer science student at John Abbott College
                </p>
            </div>
            
        </div>
    )
}