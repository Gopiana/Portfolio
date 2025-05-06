import React from 'react';
import Image from "../assets/about.jpg"
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p style={{fontSize:"17px"}}>
              I'm an enthusiastic Frontend Developer with four months of hands-on experience building responsive and user-friendly websites. I specialize in React.js and have a growing passion for creating clean, interactive, and accessible web interfaces. During this time, I’ve worked on real-time projects that helped me strengthen my skills in HTML, CSS, JavaScript, and React.
             </p> <br/>
             <p style={{fontSize:"17px"}}> I'm eager to continue learning and improving through practical experience, and I'm excited to take on an internship where I can contribute to meaningful projects, collaborate with a skilled team, and grow as a developer.
            </p>
          </div>
          <div className="about-image">
            <img src={Image} style={{width:"350px", height:"400px"}} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;