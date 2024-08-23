import React from 'react';

function SkillsPage() {
  const containerStyle = {
    padding: '40px',
    marginTop: '5rem',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#007bff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: '15px',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  const strongStyle = {
    color: '#007bff',
    fontWeight: 'bold',
  };


  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong style={strongStyle}>Languages:</strong> Python, PHP, HTML, CSS
        </li>
        <li style={listItemStyle}>
          <strong style={strongStyle}>Developer Tools:</strong> GitHub, VSCode, Postman
        </li>
        <li style={listItemStyle}>
          <strong style={strongStyle}>Frameworks:</strong> React, Bootstrap, NodeJS
        </li>
        <li style={listItemStyle}>
          <strong style={strongStyle}>Cloud/Databases:</strong> MySQL, MongoDB
        </li>
        <li style={listItemStyle}>
          <strong style={strongStyle}>Soft Skills:</strong> Verbal Communication, Team Collaboration, Leadership
        </li>
      </ul>
    </div>
  );
}

export default SkillsPage;
