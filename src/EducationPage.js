// src/EducationPage.js
import React from 'react';

const education = [
  {
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "Sahyadri College of Engineering and Management",
    location: "Mangaluru, India",
    YearOfPassing: "2025"
  },
  {
    degree: "12th Grade - Department of Pre University Education",
    institution: "Viveka Pre-University College",
    location: "Kota, India",
    YearOfPassing: "2021"
  },
  {
    degree: "10th Grade - Central Board of Secondary Education",
    institution: "VISHWA VINAYAKA NATIONAL ENGLISH MEDIUM SCHOOL",
    location: "Thekkatte, India",
    YearOfPassing: "2019"
  },
];

function EducationPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    padding: '20px',
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    marginBottom: '20px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '600px', // Max width for larger screens
  };

  const cardHeaderStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
    borderRadius: '15px 15px 0 0',
    textAlign: 'center',
  };

  const cardBodyStyle = {
    padding: '20px',
    textAlign: 'center', // Center text
  };


  return (
    <div style={containerStyle}>
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          @media (max-width: 768px) {
            .card {
              margin: 10px;
            }
          }
        `}
      </style>
      {education.map((item, index) => (
        <div className="card" style={cardStyle} key={index}>
          <div className="card-header" style={cardHeaderStyle}>
            {item.degree}
          </div>
          <div className="card-body" style={cardBodyStyle}>
            <p><strong>Institution:</strong> {item.institution}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Year of Passing:</strong> {item.YearOfPassing}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationPage;
