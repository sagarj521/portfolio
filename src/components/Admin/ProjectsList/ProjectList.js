import React, { useEffect, useState } from 'react';

import style from './ProjectList.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';
import { API_END_POINT } from '../../../Constant';

const ProjectList = (props) => {
    let [projects, setProjects] = useState([]);
    useEffect(()=>{
        getProjects();
    },[]);

    const getProjects = ()=> {
        axios.get(API_END_POINT+'project/getProjects')
             .then(response => {                 
                setProjects(response.data.data);
             })
             .catch(err => console.log(err));
    }

    

    let projectList = projects.map((pro)=>{
        return (
            <div className={style.cart}>                   
                <div className={style.cart_image}>
                    <a href=""><img src="https://via.placeholder.com/250" alt=""/></a>
                </div>
                <div className={style.card_right}>
                    <div className={style.title}>
                        {pro.title} 
                        <div>
                            <label>Technologies Used  </label>
                            {pro.technologies.map(tech=>{
                            return <span className={style.tech}>{tech.label}</span>
                            })}
                        </div>
                        <a href="" target="_blank" className={style.githubIcon}><span className={style.url}><GitHubIcon /></span></a>
                    </div>
                    <div> {pro.description}</div>                     
                </div>
            </div>
        )
    })

    return (
        
        <div className={style.projectList}> 
        {projectList}
        </div>
    )
}

export default ProjectList;