import React from 'react'

const About = () => {
    return (
        <main id="about">
            <h1 className="lg-heading">
                About <span className="text-secondary"><strong>Me</strong></span>
            </h1>

            <h2 className="sm-heading">
                Let me tell you a few things...
            </h2>

            <div className="about-info">
                <img src="images/portrait.jpg" alt="Leo Cheung"/>

                <div className="bio">
                    <h3 className="text-secondary"><strong>BIO</strong></h3>
                    <p>
                        Minim proident excepteur enim amet tempor nulla labore aliqua velit laboris aute velit laborum. 
                        Consectetur nisi sit minim id ea nisi officia duis anim irure cupidatat. 
                        Sit tempor magna labore exercitation consectetur deserunt amet culpa do laboris velit veniam proident laborum.
                    </p>
                </div>

                <div className="job job-1">
                    <h3>123 Webshop</h3>
                    <h4>FullStack Developer</h4>
                    <p>
                        Pariatur qui officia ullamco mollit officia ullamco. 
                        Laboris dolor officia consectetur ullamco et nisi enim in in. 
                        Esse in irure nulla irure culpa cillum esse magna duis ut occaecat. 
                        Nulla cupidatat pariatur laborum eu. Occaecat laborum ex dolore est.
                    </p>
                </div>

                <div className="job job-2">
                    <h3>123 Webshop</h3>
                    <h4>FullStack Developer</h4>
                    <p>
                        Pariatur qui officia ullamco mollit officia ullamco. 
                        Laboris dolor officia consectetur ullamco et nisi enim in in. 
                        Esse in irure nulla irure culpa cillum esse magna duis ut occaecat. 
                        Nulla cupidatat pariatur laborum eu. Occaecat laborum ex dolore est.
                    </p>
                </div>

                <div className="job job-3">
                    <h3>123 Webshop</h3>
                    <h4>FullStack Developer</h4>
                    <p>
                        Pariatur qui officia ullamco mollit officia ullamco. 
                        Laboris dolor officia consectetur ullamco et nisi enim in in. 
                        Esse in irure nulla irure culpa cillum esse magna duis ut occaecat. 
                        Nulla cupidatat pariatur laborum eu. Occaecat laborum ex dolore est.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About