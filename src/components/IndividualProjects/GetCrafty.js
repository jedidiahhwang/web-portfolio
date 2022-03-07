import React from "react";

import GetCraftyImage1 from "../../images/get-crafty-homepage.png";
// import GetCraftyImage2 from "../../images/GetCraftyImage2";
import "../../sass/plutus/plutus.scss";

const Plutus = () => {
    return (
        <div className="plutus">
            <section className="column-one">
                <img
                    id="plutus-image"
                    src={GetCraftyImage1}
                />
            </section>
            <div className="vl"></div>
            <section className="column-two">
                <div className="info-container">
                    <h2>
                        <strong>plutus</strong> // Visualizing your spending habits
                    </h2>
                    <article className="projects-info-text">
                        plutus was designed to be a housing system for your bank and credit card statements. 
                        This application will take your downloaded bank statements and organize your 
                        data using D3 visualization and storing your bank statements using MySQL. This 
                        project is currently under construction.
                    </article>
                    <br></br>
                    <span className="technologies">
                        JavaScript | HTML | CSS | SASS | React | Node.js | Express | Axios | MySQL | D3/Nivo 
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Plutus