import React from 'react'

const Work = () => {
    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary"><strong>Work</strong></span>
            </h1>
            
            <h2 className="sm-heading darkening">
                Check out some of my projects...
            </h2>
            
            <div className="projects">
                <div className="item">
                    <a href="#">
                        <img src="image/projects/project1.jpg" alt="Project"/>
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i>Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fas fa-eye"></i>GitHub
                    </a>
                </div>

                <div className="item">
                    <a href="#">
                        <img src="image/projects/project1.jpg" alt="Project"/>
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i>Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fas fa-eye"></i>GitHub
                    </a>
                </div>

                <div className="item">
                    <a href="#">
                        <img src="image/projects/project1.jpg" alt="Project"/>
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i>Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fas fa-eye"></i>GitHub
                    </a>
                </div> 
            </div>
        </main>
    )
}

export default Work