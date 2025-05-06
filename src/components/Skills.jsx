import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Bootstrap5', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'jQuery', level: 75 },
    { name: 'React', level: 75 },
    { name: 'Redux', level: 70 },
    { name: 'MUI', level: 70 },
    { name: 'Axios', level: 70 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;