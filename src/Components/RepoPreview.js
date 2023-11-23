import { useEffect, useState } from "react";


export default function RepoPreview(params) {
    const [languages, setLanguages] = useState([]);
    const [languageTotal, setLanguageTotal] = useState(0);

    function getLanguageNameList() {
        return Object.keys(languages);
    }

    function getLanguageAmountList() {
        return Object.values(languages);
    }


    useEffect(function () {
        fetch("https://api.github.com/repos/c-marion/Portfolio/languages")
        .then(function (response) {
            response.json()
            .then(function (languages) {
                setLanguages(languages);

                const keys = Object.keys(languages);
                let total = 0;
                
                for (let i = 0; i < keys.length; i++) {
                    total += languages[keys[i]];
                }

                setLanguageTotal(total);
            })
        })
    }, []);

    

    return (
        <div className="repo-container">
            <div className="repo-inner-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h4 className="repo-header">{params.repo && params.repo.name}</h4>
                <p className="repo-desc">{params.repo && params.repo.description}</p>

                <button className="repo-btn">
                    <a className="repo-link" href={params.repo && params.repo.clone_url}><i className="fa fa-github"></i> Repository</a>
                </button>
            </div>
            
            <hr/>
            <div className="language-container">
            {
                languages && getLanguageAmountList().map((langAmount, index) => {
                    return <p className="repo-language">{getLanguageNameList()[index]}: {languageTotal && Math.floor((langAmount / languageTotal) * 100) + "%"}</p>
                })
            }
            </div>
            
        </div>
    );
}