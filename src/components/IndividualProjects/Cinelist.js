import React, {useEffect, useState} from "react";

import CinelistImage1 from "../../images/Cinelist1.png";
import CinelistImage2 from "../../images/Cinelist2.png";
import CinelistImage3 from "../../images/Cinelist3.png";
import "../../sass/cinelist/cinelist.scss";

const Cinelist = () => {
    const [imageID, setImageID] = useState(1);

    const nextImage = (e) => {
        e.preventDefault();
        
        if(imageID === 1) {
            setImageID(2);
        } else if(imageID === 2) {
            setImageID(3);
        } else if(imageID === 3) {
            setImageID(1);
        }
    }

    const previousImage = (e) => {
        e.preventDefault();

        if(imageID === 1) {
            setImageID(3);
        } else if(imageID === 2) {
            setImageID(1);
        } else if(imageID === 3) {
            setImageID(2);
        }
    }

    const highlighted = {
        color: "#00c6cf",
    }

    return (
        <div className="cinelist-dashboard">
            <section className="column-one">
                <div className="image-container">
                    {imageID === 1 ? 
                        <img
                            className="cinelist-image"
                            src={CinelistImage1}
                        />
                    : null}
                    {imageID === 2 ? 
                        <img
                            className="cinelist-image"
                            src={CinelistImage2}
                        />
                    : null}
                    {imageID === 3 ? 
                        <img
                            className="cinelist-image"
                            src={CinelistImage3}
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
            <section className="column-two">
                <div className="info-container">
                    <h2>
                        <strong>Cinelist</strong> // Your virtual watchlist collection
                    </h2>
                    <article className="projects-info-text">
                        Cinelist is a no-database project developed at Devmountain. It takes a JSON object as its
                        input and maps your movie contents to a grid. Users can then filter movies using 
                        an input box and click movies to add to a list.
                    </article>
                    <br></br>
                    <article className="projects-info-text">
                        Once movies are in a user's list, ratings (on a scale of 0-10) as well as comments
                        can be added to that movie. Movies can be removed from the list but the rating and 
                        comment will remain using props.
                    </article>
                    <br></br>
                    <article className="projects-info-text">
                        Note that the this project was not hosted, thus no link is provided.
                    </article>
                    <br></br>
                    <span className="technologies">
                        JavaScript | HTML | CSS | React | Node.js | Express | Axios
                    </span>
                    <div className="external-links">
                        <a href="https://github.com/jedidiahhwang/noDB-Cinelist" target="_blank"><button className="borderman btn-border">GitHub Repo</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cinelist