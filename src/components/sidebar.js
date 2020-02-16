import React from 'react';


function Sidebar() {
    return (
        <nav className="wrapper">
            <div className="sidebar">
                <ul>
                    <li><a href='/'><i className="fas fa-home"></i> Home</a></li>
                    <li><a href='/portfolio'><i className="fas fa-project-diagram"></i> Portfolio</a></li>
                    <li><a href='/about'><i className="fas fa-female"></i>About</a></li>
                    <li><a href='/contact'><i className="fas fa-address-card"></i> Contact</a></li>
                </ul>
                {/* <div className="social_media">
                    <a href='https://github.com/Kaiisha05' target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href='https://www.linkedin.com/in/kaiishao/' target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-google-drive"></i></a>
                </div> */}
            </div>
       
        </nav>
    );
}

export default Sidebar;


