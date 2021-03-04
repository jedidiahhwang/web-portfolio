import React from "react";

import "../sass/summary/summary.scss";

const Summary = () => {
    return (
        <div className="summary-section">
            <section className="column-one">
                <h2>
                    <strong>Who am I?</strong> // Music, film, video games, basketball
                </h2>
                <article className="about-info-text">
                    After spending years in pursuing a career in environmental and water resources engineering,
                    I had an epiphany; I want to spend the rest of my life with computers. My passion with computer
                    science, hardware, and engineering started with my father, who built his career as a Software
                    Engineer and Developer despite a doctarate in Mechanical Engineering.
                </article>
                <br></br>
                <article className="about-info-text">
                    I graduated from the University of Utah with degrees in Civil and Environmental Engineering
                    and Environmental and Sustainbility Studies, but shortly thereafter enrolled in Devmountain.
                    The transition to coding was easier than I expected, because instead of designing solutions
                    using calculus, chemistry, and physics written on paper, I was solving issues using algorithms and logic
                    written in code instead!
                </article>
                <br></br>
                <article className="about-info-text">
                    When I'm not coding, you'll usually catch me gaming or fawning over building new PCs. If not that, I'm 
                    usually caught playing and writing music, watching and discussing blockbuster or indie films, religiously
                    following Utah Jazz basketball (or the NBA in general), or hanging out with my wife, Sasha, and our dog, 
                    Finnegan.
                </article>
                <br></br>
                <article className="about-info-text">
                    Using my formal problem solving training through my traditional engineering degree, driven
                    by a foundational knowledge provided by Devmountain as well as a thirst for knowledge, I believe
                    I have proven myself as a worthy entry to the field of coding and computer science. I hope to work
                    with you soon!
                </article>
            </section>
            <div className="vl"></div>
            <section className="column-two">
                <section className="left-side">
                    <img
                        src={require("../images/Wedding_1.jpg")}
                        className="photo wedding"
                    />
                </section>
                <section className="right-side">
                    <img
                        src={require("../images/Sasha_Me.jpg")}
                        className="photo sasha-me"
                    />
                    <img
                        src={require("../images/Finn_3.jpg")}
                        className="photo finn"
                    />
                </section>
        </section>
    </div>
    )
}

export default Summary