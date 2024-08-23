import React from 'react';


function HomePage() {
  const headerStyle = {
    padding: '50px 0',
    height:'600px',
    background: 'linear-gradient(45deg, #007bff, #00d2d3)',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0 0 15px 15px',
  };

  const buttonStyle = {
    fontSize: '1rem',
    padding: '10px 20px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const animationStyle = {
    fontSize: '2rem', // Increased font size
    marginBottom: '20px',
    animation: 'slideIn 4s ease-in-out',
  };

  return (
    <header style={headerStyle}>
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        `}
      </style>
      <img 
  src={`${process.env.PUBLIC_URL}/photo/SURAIMAGE.jpg`} 
  alt="Profile" 
  style={imgStyle} 
/>

      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to My Portfolio</h1>
      <p style={animationStyle}>
        Hello! I'm Surabhi S Shetty
      </p>
      <p><h1>I'm currently pursuing my Bachelor's degree in Information Science and Engineering</h1></p>

      <b><h2>"I'm excited about creating new web solutions and combining technology with great user experiences."</h2></b>
      <br></br>
      <a href="#education" style={buttonStyle} className="btn btn-primary">Explore Now</a>
    </header>
  );
}

export default HomePage;
