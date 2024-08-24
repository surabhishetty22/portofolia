import React from 'react';

const containerStyle = {
  marginTop: '50px',
  padding: '10px',
  width: '1500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const cardStyle = {
  border: '2px solid black', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '900px',
  backgroundColor: 'white',
  color: 'black',
};

const imageStyle = {
  width: '400px',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '10px 0 0 10px',
};

const cardBodyStyle = {
  padding: '20px',
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const cardTextStyle = {
  fontSize: '1rem',
  marginBottom: '10px',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '30px',
};

const sectionStyle = {
  marginTop: '10px',
  fontSize: '1rem',
  color: 'black',
};

const sectionHeaderStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const listStyle = {
  marginLeft: '20px',
  listStyleType: 'disc',
};



function ProjectsPage() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>
      <div style={cardStyle}>
      <img src={`${process.env.PUBLIC_URL}/photo/smartwater.png`} alt="SMARTWATER" style={imageStyle} />
        <div style={cardBodyStyle}>
          <h2 style={cardTitleStyle}>SMARTWATER</h2>
          <p style={cardTextStyle}>A web application for water management. Features include schedule management and bill tracking for various locations.</p>
          <p>The project output comprises an efficient organization of schedules, comprehensive water bill management, and an enhanced user experience through a user-friendly web interface.
            </p><div style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>Technologies Used:</h3>
            <ul style={listStyle}>
              <li>React</li>
              <li>PHP</li>
              <li>SQL</li>
        
            </ul>
          </div>
        </div>
      </div>
      <div style={cardStyle}>


        <img src={`${process.env.PUBLIC_URL}/photo/predictiveModeling.png`} alt="Predictive Modeling" style={imageStyle} />
        <div style={cardBodyStyle}>
          <h2 style={cardTitleStyle}>Predictive Modeling for Hairfall Detection</h2>
          <p style={cardTextStyle}>Developed a machine learning model to predict the likelihood of hair loss based on individual factors,
          enabling early intervention .</p>
          <p>Systematically gathers data through web surveys using Google Forms</p>
          <p>Analyzes various factors contributing to hair loss and provides a high or low risk prediction.</p>
          <div style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>Technologies Used:</h3>
            <ul style={listStyle}>
              <li>Python</li>
              <li>ReactJS</li>
              <li>Numpy</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={`${process.env.PUBLIC_URL}/photo/food.png`} alt="Food Recipe Management" style={imageStyle} />
        <div style={cardBodyStyle}>
          <h2 style={cardTitleStyle}>Food Recipe Management</h2>
          <p style={cardTextStyle}>A comprehensive web app for managing and discovering food recipes, including user reviews and ratings.</p>
          <div style={sectionStyle}>
            <h3 style={sectionHeaderStyle}>Technologies Used:</h3>
            <ul style={listStyle}>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
