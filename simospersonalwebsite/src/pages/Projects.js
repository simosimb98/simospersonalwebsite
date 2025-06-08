import { Element, Events, scrollSpy } from "react-scroll";
import axios from "axios";
import React, { useEffect, useState } from 'react';

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
    }, [owner]);

    return (
        <Element name="projects" className="section">
           <div className="open-source-repositories">
                {
                    repoData.map(())
                }

           </div>
        </Element>
    );
}

export default Projects;