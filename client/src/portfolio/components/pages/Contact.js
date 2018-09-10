import React from 'react'

const Contact = () => {
    return (
        <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary"><strong>Me</strong></span>
            </h1>
            <h2 className="sm-heading">
                This is how you can reach me...
            </h2>

            <div className="boxes">
                <div>
                    <span className="text-secondary">Email: </span> leo@test.com
                </div>
                <div>
                    <span className="text-secondary">Phone: </span> (905)-868-4589
                </div>
                <div>
                    <span className="text-secondary">Address: </span> Aurora, Ontario
                </div>
            </div>
        </main>
    )
}

export default Contact