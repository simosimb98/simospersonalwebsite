import { Element, Events, scrollSpy } from "react-scroll";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard.js'
import './css/Project.css';

function Projects (props) {
    const [repoData, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${props.owner}/repos`)
            .then(resp => {
                setData(resp.data);
                setLoading(true);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [props.owner]);

    return (
        <Element name="projects" className="section">
        <div className="projects-header">
            <h1>Projects</h1>
            <div className="line"></div>
        </div>
           <div className="open-source-repositories">
               {repoData.map((repo) => (
                    <RepoCard owner={props.owner} repo={repo.name}/>
               ))}
           </div>
        </Element>
    );
}

export default Projects;