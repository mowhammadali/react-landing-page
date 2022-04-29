import React from 'react';

import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
    return(
        <div className = {styles.banner}>
            <img className = {styles.bannerLogo} src = {banner} alt = "banner"></img>
            <div className = {styles.textContainer}>
                <h1>Programmer</h1>
                <p>we're learning <span>React.js</span> </p>
            </div>
        </div>
    );
}

export default Banner;