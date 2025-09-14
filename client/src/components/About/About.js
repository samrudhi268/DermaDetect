import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are a team dedicated to helping people identify and manage skin diseases.</p>
      <div className="about-team">
        <div className="team-member">
          <img src="C:/Users/Fatima Azfar/Documents/Web_Project/mern-skin-disease-app/client/src/images/IMG-20231019-WA0019 (1).jpg" alt="Team Member 1" />
          <h3>Samruddhi Kshirsagar</h3>
          <p>Computer Vision Engineer</p>
        </div>
        <div className="team-member">
          <img src="C:/Users/Fatima Azfar/Pictures/fatima_pic.jpeg" alt="Team Member 2" />
          <h3>Shreya Shirkhe</h3>
          <p>Artificial Intelligence Engineer</p>
        </div>
        <div className="team-member">
          <img src="C:/Users/Fatima Azfar/Pictures/fatima_pic.jpeg" alt="Team Member 3" />
          <h3>Piyusha Patil</h3>
          <p>Machine Learning Engineer</p>
        </div>
        <div className="team-member">
          <img src="C:/Users/Fatima Azfar/Pictures/fatima_pic.jpeg" alt="Team Member 2" />
          <h3>Vaishnavi Mane</h3>
          <p>Frontend and backend Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
