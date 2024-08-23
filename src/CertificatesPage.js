import React from 'react';

const containerStyle = {
  marginTop: '50px',
  padding: '20px',
  textAlign: 'center',
  background: 'linear-gradient(to right, #f0f4f8, #cce4f7)',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '30px',
  color: '#004d99',
  fontFamily: 'Arial, sans-serif',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  textAlign: 'left',
  maxWidth: '600px',
  margin: '0 auto'
};

const listItemStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  padding: '15px',
  marginBottom: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  fontSize: '1.1rem'
};

function CertificatesPage() {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Certificates</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          MERN Stack With Bootstrap Framework : TCE
        </li>
        <li style={listItemStyle}>
          Microsoft Azure: Create an Intelligent Document Processing Solution with Azure AI Document Intelligence
        </li>
        <li style={listItemStyle}>
          Infosys Springboard: Python, Introduction to Artificial Intelligence
        </li>
        <li style={listItemStyle}>
          JobReady Employability Skills: Wadhwani Foundation
        </li>
      </ul>
    </div>
  );
}

export default CertificatesPage;
