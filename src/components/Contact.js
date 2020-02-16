import React from 'react';

function Contact() {
    return (
        <div className="wrap">
            <div className="main_content">
                <div className="header">Let's Connect</div>
                <div className="info">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card h-100">
                            <a href='https://github.com/Kaiisha05' target="_blank"><i className="fab fa-github fa-7x"></i></a>
                                <div className="card-body">
                                    <h5 className="card-title">Tis the Seasoning</h5>
                                    <p className="card-text">A Recipe Sharing App that uses Node and Express server to retrieve data with the help of MySQL to display User's recipes.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                            <a href='https://www.linkedin.com/in/kaiishao/' target="_blank"><i className="fab fa-linkedin fa-7x"></i></a>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                            <a href="#"><i className="fab fa-google-drive fa-7x"></i></a>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        </div>
            
                    
                 
                </div>
            </div>
        </div>


    )
}

export default Contact;