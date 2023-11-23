

/**
 * The first component you see on the website, complete with a name, personal description, and more.
 */
export default function Title() {
    return (
        <>
        <div className="title-container">
            <div className="title-circle" id="title-circle1"/>
            <div className="title-circle" id="title-circle2"/>

            <h1 className="title-heading">Caden Marion</h1>
            <h3 className="title-subheading">Full time Computer Science student and John Abbott College.</h3>
            <button className="title-btn">
                <a className="title-link" role="button" target="_target" href="https://drive.google.com/file/d/1q9RQ0rY-3iYLgGN9kBx-qPU_OKRTyrzO/view?usp=sharing"><b>RESUME</b></a>
            </button>
            
        </div>
        </>
    )
}