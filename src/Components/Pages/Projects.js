import { useEffect, useState } from "react";
import RepoPreview from "../RepoPreview";


export default function Projects() {
    const [repos, setRepos] = useState([]);
    const user = useEffect(function() {
        const response = fetch("https://api.github.com/users/c-marion/repos")
        .then(function(response) {
            response.json()
            .then(function(repos) {
                setRepos(repos);
            });
        });
    }, []);

    return (
        <div className="projects-container" id="projects">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>Projects</h1>

            <ul>
                <li className="projects-li">
                    <RepoPreview repo={repos[0]}/>
                </li>
            </ul>
            
        </div>
    );
}