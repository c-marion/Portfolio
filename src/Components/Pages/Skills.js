

export default function Skills(params) {
    return (
        <div className="skills-container" id="skills">
            <link rel="stylesheet"href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"/>
            <h1 className="aboutme-heading">Skills</h1>

            <ul className="skills-list">
                {
                    params.languages && params.languages.map((value, index) => {
                        return <li className="skills-list-item">
                                    <div className="skills-list-item">
                                        <p className="skills-icon">
                                            <i className={`devicon-${value.language}-plain`}></i>
                                        </p>
                                        <p className="skills-icon-text">{value.languageName}</p>
                                    </div>
                                </li>
                    })
                }
            </ul>
            
            <p className="skills-paragraph">
                For my technical skills, I exceed at MVC and databases, but I also do well with tasks relating to Object Oriented Programming (OOP) such as creating
                classes, interfaces, and objects, as well as implementing them. I prefer to work in the back-end of an app or program, as I both enjoy working in back-ends and
                am a little less skilled in the front-end.
            </p>
        </div>
    )
}