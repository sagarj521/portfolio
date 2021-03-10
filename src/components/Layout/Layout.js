import React from 'react';
// import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as classes from './Layout.module.css';


const Layout = (props)=> {
    return (
        <div className={classes.layout}>
            <Header />  
            <main>            
                {props.children}            
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;