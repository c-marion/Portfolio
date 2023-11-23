

export default function Aboutme() {
    return (
        <div className="aboutme-container" id="about">
            <img src={process.env.PUBLIC_URL + "/Portrait.png"} className="aboutme-portrait"/>

            <div className="aboutme-paragraph-container">
                <h2 className="aboutme-heading">About Me</h2>
                <p>
                    My name is Caden Marion. I've been a computer science student at John Abbott College since late 2021. In my free time, I enjoy playing video games, making
                    nonsensical 3D animations, gardening, and going to places with my friends. I have a great interest in MVC and databases, and enjoy working with them.
                </p>
            </div>
            
        </div>
    )
}