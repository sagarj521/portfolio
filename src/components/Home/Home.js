import React from 'react';
import * as classes from './Home.module.css';
import proImg from '../../assets/img/profile-img.jpg';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { IconButton } from '@material-ui/core';
import ParticleComponent from '../Particle/ParticleComponent';
import Typed from 'react-typed';

const Home = ()=> {
    return (
        <div className={classes.home}>
           
                <div className={classes.home_typo}>
                <Typed
                    strings={["Web developer", "UI developer"]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={1}
                    showCursor={false}
                    smartBackspace
                />
                </div>
            <div className={classes.home_profile_section}>                
                <div className={classes.home_left}>
                    <img src={proImg} alt="" />
                </div>
                <div className={classes.home_right}>
                <div className={classes.personal_text}>
                    <h6>Hello Everybody, i am</h6>
                    <h3>Sagar Jadhav</h3>
                    <h4>Software Engineer</h4>
                    <p>Talented and smart worker,Cooperative in nature.Always ready to help to any one.Sound knowledge in the field of programming.Currently working as a software engineer in Neosoft Technologies pvt. ltd.</p>
                    <ul className={classes.list}>
                        <li>
                            <IconButton><CalendarTodayIcon /></IconButton>
                            28/05/1995
                        </li>
                        <li>
                            <IconButton><PhoneAndroidIcon /></IconButton>
                             44 (012) 6954 783
                        </li>
                        <li>
                            <IconButton><MailOutlineIcon /></IconButton>
                            businessplan@donald
                        </li>
                        <li>
                            <IconButton><LocationOnIcon /></IconButton>
                            Santa monica bullevard
                        </li>
                    </ul>
                    {/* <ul className="list personal_social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul> */}
                </div>
            </div>      
            </div>  
            <ParticleComponent />
           
        </div>
    )
}

export default Home;