import * as React from 'react';
import './css/Education.css'
import { Element, Events, scrollSpy } from "react-scroll";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Education() {

    const education_items = [
        {
            name: "Cyprus University of Technology",
            title: "BSc Computer Engineering & Informatics",
            period:"September 2017 - June 2022",
            image:"/images/cut-logo.jpg",
            alt: "cut-logo"
        },
        {
            name: "Technical school of Paphos",
            title: "High school diploma",
            period:"September 2012 - June 2015",
            image:"/images/tech-school-logo.jpg",
            alt: "techscholl-logo"
        }
    ];

    return (
        <Element name="education" className="section">
            <div className="education-header">
                <h1>Education</h1>
                <div className="line"></div>
            </div>
            <div className="education-content">
                <div className="edu-section">
                    {education_items.map((item, idx) => (
                        <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image= {item.image}
                            alt={item.alt}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center',}}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center'}}>
                               {item.title} <br/> {item.period}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    ))}   
                </div>
            </div>
        </Element>
    );
}

export default Education;