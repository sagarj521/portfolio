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

    

    let me = projects.map((pro)=>{
        return (
            <div className={style.cart}>                   
                <div className={style.cart_image}>
                    <a href=""><img src="https://via.placeholder.com/250" alt=""/></a>
                </div>
                <div className={style.card_right}>
                    <div className={style.title}>
                        {pro.title} 
                        <span className={style.url}><GitHubIcon /></span>
                    </div>
                    <div> {pro.description}
                    </div> 
                    <label>Technologies Used</label>
                        {pro.technologies.map(tech=>{
                           return <span className={style.tech}>{tech.label}</span>
                        })}
                </div>
            </div>
        )
    })

    return (
        
        <div className={style.projectList}> 
        {me}
            {/* <div className={style.cart}>                   
                <div className={style.cart_image}>
                    <a href=""><img src="https://via.placeholder.com/250" alt=""/></a>
                </div>
                <div className={style.card_right}>
                    <div className={style.title}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
                        <span className={style.url}><GitHubIcon /></span>
                    </div>
                    <div> sem  Cras dapibus. Vivamus elementum tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </div> 
                    <label>Technologies Used</label> <span className={style.tech}>span 1</span>
                    <span className={style.tech}>span 1</span>
                    <span className={style.tech}>span 1</span>
                    <span className={style.tech}>span 1</span>
                    <span className={style.tech}>span 1</span>
                </div>
            </div> */}
        </div>
    )
}

export default ProjectList;