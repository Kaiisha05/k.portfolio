import React from 'react';


function Sidebar() {
    return (
        <nav className="wrapper">
            <div className="sidebar">
                <ul>
                    <li><a href='/'><i class="fas fa-home"></i> Home</a></li>
                    <li><a href='/about'><i class="fas fa-user"></i> About</a></li>
                    <li><a href="#"><i class="fas fa-address-card"></i> Contact</a></li>
                    <li><a href='/portfolio'><i class="fas fa-project-diagram"></i> Portfolio</a></li>
                    <li><a href="#"><i class="fas fa-blog"></i> Blog</a></li>
                    <li><a href="#"><i class="fas fa-address-book"></i> Contact</a></li>
                    <li><a href="#"><i class="fas fa-map-pin"></i> Map</a></li>
                </ul>
                <div className="social_media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            {/* <div className="main_content">
                <div className="header">Welcome, I'm Kaiisha Oliver.</div>
                <div className="info">
                    <div>Sidebar</div>
                </div>
            </div> */}
        </nav>
    );
}

export default Sidebar;


