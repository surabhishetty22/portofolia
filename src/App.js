import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import EducationPage from './EducationPage';
import InternshipPage from './InternshipPage';
import ProjectsPage from './ProjectsPage';
import CertificatesPage from './CertificatesPage';
import ContactPage from './ContactPage';
import SkillsPage from './SkillsPage';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <header style={headerStyle}>
          <nav style={navStyle}>
            <ul style={navListStyle}>
              <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
              <li style={navItemStyle}><Link to="/education" style={linkStyle}>Education</Link></li>
              <li style={navItemStyle}><Link to="/internship" style={linkStyle}>Internship</Link></li>
              <li style={navItemStyle}><Link to="/projects" style={linkStyle}>Projects</Link></li>
              <li style={navItemStyle}><Link to="/certificates" style={linkStyle}>Certificates</Link></li>
              <li style={navItemStyle}><Link to="/skill" style={linkStyle}>Skill</Link></li>
              <li style={navItemStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/skill" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer style={footerStyle}>
          <p style={footerTextStyle}>© 2024 Surabhi S Shetty. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Styles
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const headerStyle = {
  backgroundColor: '#004d99',
  padding: '10px',
  color: 'white',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const navListStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
};

const navItemStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
};

const mainStyle = {
  flex: '1',
  padding: '20px',
};

const footerStyle = {
  backgroundColor: '#004d99',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
};

const footerTextStyle = {
  margin: '0',
};

export default App;
