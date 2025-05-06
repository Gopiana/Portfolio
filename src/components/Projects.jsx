import React from 'react';
import form from '../assets/form.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Form-Validation',
      description: 'A responsive form validation system ensuring accurate user input using JavaScript.',
      technologies: ['Javascript', 'Bootstrap', 'CSS'],
      image: {form},
      liveLink: 'https://form-validation-1.vercel.app/',
      codeLink: 'https://github.com/Gopiana/Form-validation.git'
    },
    {
      id: 2,
      title: 'Weather-App',
      description: 'Real-time weather information with 5-day forecast for any location.',
      technologies: ['React', 'API Integration','CSS'],
      image: 'src/assets/Weatherapp.png',
      liveLink: 'https://weather-app-three-pi-16.vercel.app/',
      codeLink: 'https://github.com/Gopiana/weather-app.git'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A personal portfolio showcasing skills and projects.',
      technologies: ['React', 'CSS','Bootstrap'],
      image: 'src/assets/Portfolio.PNG',
      liveLink: 'https://portfolio-sigma-red-98.vercel.app/',
      codeLink: 'https://github.com/Gopiana/Portfolio.git'
    },
    {
      id: 4,
      title: 'Ateam Website',
      description: 'Developed the Ateam website using Bootstrap to showcase company services, portfolio, and career opportunities with a responsive design.',
      technologies: ['BootStrap', 'CSS'],
      image: 'src/assets/Ateam.PNG',
      liveLink: 'https://ateam-website-c7eh.vercel.app/',
      codeLink: 'https://github.com/Gopiana/Ateam-website.git'
    },
    {
      id: 5,
      title: 'Facebook-Layout',
      description: 'I built a static clone of the Facebook homepage using Bootstrap and CSS, focusing on responsive design.',
      technologies: ['Bootstrap', 'CSS'],
      image: 'src/assets/FacebookLayout.PNG',
      liveLink: 'https://facebook-layout-delta.vercel.app/',
      codeLink: 'https://github.com/Gopiana/Facebook-Layout.git'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title}/>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Explore Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styling for buttons */}
      <style>{`
        .project-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .btn {
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border-radius: 4px;
          text-decoration: none;
        }

        .btn-secondary {
          background-color: #6c757d;
        }

        .projects {
          padding: 40px 0;
        }

        .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 30px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .project-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background-color: #f9f9f9;
        }

        .project-card img {
          width: 100%;
          height: auto;
        }

        .project-info {
          padding: 15px;
        }

        .technologies span {
          background-color: #e1e1e1;
          padding: 4px 8px;
          margin-right: 5px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
