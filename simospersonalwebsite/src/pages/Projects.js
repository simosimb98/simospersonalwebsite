import { Element, Events, scrollSpy } from "react-scroll";
import React, { useEffect, useState } from 'react';

function Projects (owner, repo) {
    const [repoData, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.github.com/repos/${owner}/${repo}`)
    });

    return (
        <Element name="projects" className="section">
           
        </Element>
    );
}

export default Projects;