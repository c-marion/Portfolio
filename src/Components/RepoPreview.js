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
            <h4 className="repo-header">{params.repo && params.repo.name}</h4>
            <p className="repo-desc">{params.repo && params.repo.description}</p>

            <button className="repo-btn">
                <a className="repo-link" href={params.repo && params.repo.clone_url}>Clone Repo</a>
            </button>
            
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