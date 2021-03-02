import React, {useEffect, useState} from "react";

import ExplorifyImage1 from "../../images/Explorify1.png";
import ExplorifyImage2 from "../../images/Explorify2.png";
import ExplorifyImage3 from "../../images/Explorify3.png";
import ExplorifyImage4 from "../../images/Explorify4.png";
import "../../sass/explorify/explorify.scss";

const Explorify = () => {
    const [imageID, setImageID] = useState(1);

    const nextImage = (e) => {
        e.preventDefault();
        
        if(imageID === 1) {
            setImageID(2);
        } else if(imageID === 2) {
            setImageID(3);
        } else if(imageID === 3) {
            setImageID(4);
        } else if(imageID === 4) {
            setImageID(1)
        }
    }

    const previousImage = (e) => {
        e.preventDefault();

        if(imageID === 1) {
            setImageID(4);
        } else if(imageID === 2) {
            setImageID(1);
        } else if(imageID === 3) {
            setImageID(2);
        } else if(imageID === 4) {
            setImageID(3);
        }
    }

    const highlighted = {
        color: "#00c6cf",
    }

    return (
        <div className="explorify-dashboard">
            <section className="column-one">
                <div className="image-container">
                    {imageID === 1 ? 
                        <img
                            id="explorify-image"
                            src={ExplorifyImage1}
                        />
                    : null}
                    {imageID === 2 ? 
                        <img
                            id="explorify-image"
                            src={ExplorifyImage2}
                        />
                    : null}
                    {imageID === 3 ? 
                        <img
                            id="explorify-image"
                            src={ExplorifyImage3}
                        />
                    : null}
                    {imageID === 4 ? 
                        <img
                            id="explorify-image"
                            src={ExplorifyImage4}
                        />
                    : null}
                </div>
                <div className="navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" id="previous" class="icon icon-tabler icon-tabler-arrow-down-circle" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F4F5F7" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={previousImage}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <line x1="8" y1="12" x2="12" y2="16" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="16" y1="12" x2="12" y2="16" />
                    </svg>
                    <div className="index-indicator">
                        {imageID === 1 ?
                                <div style={highlighted} className="circle">o</div>
                            :   <div className="circle">o</div>
                        }
                        {imageID === 2 ?
                                <div style={highlighted} className="circle">o</div>
                                :   <div className="circle">o</div>                    
                        }
                        {imageID === 3 ?
                                <div style={highlighted} className="circle">o</div>
                                :   <div className="circle">o</div>                   
                        }
                        {imageID === 4 ?
                                <div style={highlighted} className="circle">o</div>
                                :   <div className="circle">o</div>                   
                        }
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="next" class="icon icon-tabler icon-tabler-arrow-down-circle" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F4F5F7" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={nextImage}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <line x1="8" y1="12" x2="12" y2="16" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="16" y1="12" x2="12" y2="16" />
                    </svg>
                </div>
            </section>
            <div className="vl"></div>
            <section className="column-two">
                <div className="info-container">
                    <h2>
                        <strong>Explorify</strong> // Music repertoire expansion
                    </h2>
                    <article className="projects-info-text">
                            Explorify is an app designed around Spotify's API and intended for users to expand their music tastes. 
                            Using Spotify's supplied endpoints, a list of genres will be generated for a user to access. Upon selecting a genre, 
                            a primary artist will be provided along with a list of related artists. Users can then click on an artist, displaying
                            an overlay with additional information as well as a link to the artist's Spotify page.
                    </article>
                    <br></br>
                    <span className="technologies">
                        JavaScript | HTML | CSS | SASS | Bootstrap | React | Node.js | Express | Axios | Massive | PostgreSQL | Nodemailer
                    </span>
                    <div className="external-links">
                        <a href="https://github.com/jedidiahhwang/explorify" target="_blank"><button className="borderman btn-border">GitHub Repo</button></a>
                        <a href="https://explorify.dev/" target="_blank"><button className="borderman btn-border">Site</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explorify