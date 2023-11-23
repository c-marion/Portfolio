import { useEffect, useState } from "react";


export default function Projects() {
    const [repos, setRepos] = useState([]);
    const user = useEffect(function() {
        const response = fetch("https://api.github.com/users/c-marion/repos")
        .then(function(response) {
            response.json()
            .then(function(response) {
                console.log(response);
            });
        });
    }, []);

    return (
        <div className="projects-container" id="projects">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>Projects</h1>
            
        </div>
    );
}