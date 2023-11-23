

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
            
            
        </div>
    )
}