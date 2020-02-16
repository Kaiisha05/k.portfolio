import React from 'react';


function Sidebar() {
    return (
        <nav className="wrapper">
            <div className="sidebar">
                <ul>
                    <li><a href='/'><i class="fas fa-home"></i> Home</a></li>
                    <li><a href='#'><i class="fas fa-user"></i> Profile</a></li>
                    <li><a href="#"><i class="fas fa-address-card"></i> Contact</a></li>
                    <li><a href='/portfolio'><i class="fas fa-project-diagram"></i> Portfolio</a></li>
                    <li><a href="#"><i class="fas fa-blog"></i> Blog</a></li>
                    <li><a href='/about'><i class="fas fa-address-book"></i>About</a></li>
                    <li><a href="#"><i class="fas fa-map-pin"></i> Map</a></li>
                </ul>
                <div className="social_media">
                    <a href='https://github.com/Kaiisha05' target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href='https://www.linkedin.com/in/kaiishao/' target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-google-drive"></i></a>
                </div>
            </div>
       
        </nav>
    );
}

export default Sidebar;


