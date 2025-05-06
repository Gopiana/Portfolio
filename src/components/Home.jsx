import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo (2).png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-content">
          <img src={Logo} alt="Gopika Logo" className="logo" />

          <h1>Hi, I'm Gopika</h1>
          <p>
            A passionate <strong style={{ color: "white", fontSize: "25px" }}>Front-End Developer</strong> crafting modern, responsive web experiences with React.js and a creative touch.
          </p>

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View My Work
            </Link>

            <a href="/GOPIKA DR.pdf" download className="btn btn-success">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
