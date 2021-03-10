import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import * as classes from './Portfolio.module.css';

const Portfolio = () => {
    return ( 
        <div className={classes.card_component}>
            
            <CardComponent />          
            <CardComponent />          
            <CardComponent />          
            <CardComponent />          
            <CardComponent />          
            <CardComponent />          
            <CardComponent />          
        </div>
     );
}
 
export default Portfolio;