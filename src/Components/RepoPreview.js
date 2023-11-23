import { useEffect, useState } from "react";


export default function RepoPreview(params) {
    const [languages, setLanguages] = useState([]);
    const [languageTotal, setLanguageTotal] = useState(0);

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
            <hr/>
            <p>{languageTotal && languageTotal}</p>
        </div>
    );
}