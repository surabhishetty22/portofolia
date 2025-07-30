import React, { useState } from 'react';

const internships = [
  {
    title: "Web-based Grievance Portal",
    company: "Niveus Solutions",
    duration: "9-Oct-2023 – 4-Nov-2023",
    location: "Mangaluru, India",
    description: "Developed a platform providing Indian citizens a streamlined platform to raise complaints about various government departments using AI technology and user-friendly interfaces.",
    responsibilities: [
      "Created wireframes for a mobile journaling app and the grievance portal using Balsamiq.",
      "Developed key pages like login and signup using ReactJS, ensuring intuitive navigation.",
      "Tested functionalities using Postman for complaint submission and retrieval.",
      "Implemented an AI model to automatically classify complaints.",
      "Built admin features for managing complaints.",
    ],
    technologies: ["ReactJS", "AI", "Balsamiq", "Postman"],
    image: `${process.env.PUBLIC_URL}/photo/grievancePortalImage.png`, 
  },
  {
    title: "Pet Management System",
    company: "Dataqueue Systems",
    duration: "01-02-2025 – 23-05-2025",
    location: "Remote",
    description: "Designed and implemented a Pet Management System using the MERN stack, allowing users to register, explore, and adopt pets, while providing administrators with tools to oversee adoption requests and maintain detailed adoption logs.",
    responsibilities: [
      "Developed backend APIs using Node.js and Express for managing pet data.",
      "Created responsive frontend components using ReactJS and Bootstrap.",
      "Integrated MongoDB for secure and efficient data storage.",
      "Implemented RESTful APIs, form validation, and role-based access control for admins, with API testing conducted via Thunder Client."
    ],
    technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "Bootstrap", "ThunderClient"],
   image: `${process.env.PUBLIC_URL}/photo/image.png`, 
  },
];

function InternshipPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < internships.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const current = internships[currentIndex];

  const containerStyle = {
    marginTop: '50px',
    padding: '10px',
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
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '900px',
    backgroundColor: 'white',
    color: 'black',
    overflow: 'hidden',
  };

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '100%', // Take full height of the card
  padding: '20px',
};

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0 0 10px 10px',
  };

  const cardBodyStyle = {
    padding: '20px',
    flex: 1,
  };

  const titleStyle = {
    padding: '15px',
    backgroundColor: '#f1f1f1',
    color: '#007bff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.75rem',
  };

  const sectionStyle = {
    marginTop: '10px',
    fontSize: '1rem',
    color: 'black',
    backgroundColor: '#f0f8ff',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
  };

  const listStyle = {
    textAlign: 'left',
    paddingLeft: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <img src={current.image} alt={current.title} style={imageStyle} />
        </div>
        <div style={cardBodyStyle}>
          <div style={titleStyle}>{current.title}</div>
          <div style={sectionStyle}>
            <p><strong>Company:</strong><br />{current.company}</p>
            <p><strong>Duration:</strong><br />{current.duration}</p>
            <p><strong>Location:</strong><br />{current.location}</p>
            <p><strong>Description:</strong><br />{current.description}</p>
          </div>
          <div style={sectionStyle}>
            <p><strong>Responsibilities:</strong></p>
            <ul style={listStyle}>
              {current.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={sectionStyle}>
            <p><strong>Technologies:</strong></p>
            <ul style={listStyle}>
              {current.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {currentIndex < internships.length - 1 && (
        <button onClick={handleNext} style={buttonStyle}>Next</button>
      )}
    </div>
  );
}

export default InternshipPage;
