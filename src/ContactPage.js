import React from 'react';

const containerStyle = {
  marginTop: '50px',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f9', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
};

const headingStyle = {
  fontSize: '2.5rem', 
  marginBottom: '30px',
  color: '#333',
  fontWeight: 'bold',
  textTransform: 'uppercase', 
  letterSpacing: '1px', 
};

const buttonStyle = {
  fontSize: '1.1rem',
  padding: '15px 25px',
  borderRadius: '25px', 
  textDecoration: 'none',
  display: 'inline-block',
  margin: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  outline: 'none', 
  transition: 'none', 
}
const githubButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#343a40',
  color: 'white',
};

const linkedinButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#0077b5',
  color: 'white',
};

const mailButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#d14836',
  color: 'white',
};

function ContactPage() {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <div>
        <a
          href="https://github.com"
          style={githubButtonStyle}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          style={linkedinButtonStyle}
        >
          LinkedIn
        </a>
        <a
          href="mailto:shettysurabhi22@gmail.com"
          style={mailButtonStyle}
        >
          Email Me
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
