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
  border: '2px solid black', // Black border
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

const titleStyle = {
  fontWeight: 'bold',
  marginTop: '10px',
  fontSize: '1.1rem',
};

function ProjectsPage() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>
      <div style={cardStyle} className="card mb-3">
        <img src="/photo/smartwater.png" alt="SMARTWATER" style={imageStyle} />
        <div style={cardBodyStyle} className="card-body">
          <h5 style={cardTitleStyle} className="card-title">SMARTWATER: Urban Water Management Optimization</h5>
          <p style={titleStyle}>Date:</p>
          <p style={cardTextStyle} className="card-text">01-Jan-2024 - 15-Mar-2024</p>
          <p style={titleStyle}>Description:</p>
          <p style={cardTextStyle}>
            This project involves a web application for managing schedules and water bills for different places, with efficient administration.
          </p>
          <p>The project output comprises an efficient organization of schedules, comprehensive water bill management, and an enhanced user experience through a user-friendly web interface.</p>
          <div style={sectionStyle}>
            <p style={sectionHeaderStyle}>Tools & Technologies Used:</p>
            <ul style={listStyle}>
              <li>HTML</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={cardStyle} className="card">
        <img src="/photo/predictiveModeling.png" alt="Predictive Modeling for Hair Loss" style={imageStyle} />
        <div style={cardBodyStyle} className="card-body">
          <h5 style={cardTitleStyle} className="card-title">Predictive Modeling for Hair Loss</h5>
          <p style={titleStyle}>Date:</p>
          <p style={cardTextStyle} className="card-text">04-Nov-2023 - 15-Mar-2024</p>
          <p style={titleStyle}>Description:</p>
          <p style={cardTextStyle}>
            This project involves a web application for predicting the likelihood of hair loss based on individual factors, enabling early intervention.
          </p>
          <p>Analyzes various factors contributing to hair loss and provides a high or low risk prediction.</p>
          <p>Systematically gathers data through web surveys using Google Forms.</p>
          <div style={sectionStyle}>
            <p style={sectionHeaderStyle}>Tools & Technologies Used:</p>
            <ul style={listStyle}>
              <li>Python</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Numpy</li>
              <li>Pandas</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={cardStyle} className="card">
        <img src="/photo/food.png" alt="Food Recipe Management" style={imageStyle} />
        <div style={cardBodyStyle} className="card-body">
          <h5 style={cardTitleStyle} className="card-title">Food Recipe Management Web Application</h5>
          <p style={titleStyle}>Objective:</p>
          <p style={cardTextStyle}>
            Create a web application using MongoDB for managing food recipes with features for user authentication, recipe management, and feedback.
          </p>
          <p style={titleStyle}>Features:</p>
          <ul style={listStyle}>
            <li>Register and Login: Users can create accounts and log in to access the application.</li>
            <li>Create and Manage Recipes: Users can create, update, and delete recipes. Each recipe can include a name, list of ingredients, preparation steps, and an image.</li>
            <li>View Recipes: Users can view all recipes or search for specific recipes by name.</li>
            <li>Provide Feedback: Users can rate and review recipes, with the ability to view feedback provided by others.</li>
          </ul>
          <div style={sectionStyle}>
            <p style={sectionHeaderStyle}>Tools & Technologies Used:</p>
            <ul style={listStyle}>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>ReactJS</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
