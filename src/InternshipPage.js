import React from 'react';

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
    image: `${process.env.PUBLIC_URL}/photo/grievancePortalImage.png`, // Update with the correct path to your image
  }
];
// 
function InternshipPage() {
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
    alignItems: 'flex-start', // Align items at the start of the container
    width: '100%',
    maxWidth: '900px',
    backgroundColor: 'white',
    color: 'black',
    overflow: 'hidden', // Ensure content doesn't overflow
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
    width: '400px',
    height: '250px',
    marginTop: '350px', // Move the image container down by 100px
    marginLeft: '0', // Align with border if needed
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0 0 10px 10px', // Rounded corners at bottom
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
    textAlign: 'left', // Align text to the left
  };

  const listStyle = {
    textAlign: 'left',
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      {internships.map((item, index) => (
        <div style={cardStyle} key={index}>
          <div style={imageContainerStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
          </div>
          <div style={cardBodyStyle}>
            <div style={titleStyle}>{item.title}</div>
            <div style={sectionStyle}>
              <p><strong>Company:</strong><br />{item.company}</p>
              <p><strong>Duration:</strong><br />{item.duration}</p>
              <p><strong>Location:</strong><br />{item.location}</p>
              <p><strong>Description:</strong><br />{item.description}</p>
            </div>
            <div style={sectionStyle}>
              <p><strong>Responsibilities:</strong></p>
              <ul style={listStyle}>
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div style={sectionStyle}>
              <p><strong>Technologies:</strong></p>
              <ul style={listStyle}>
                {item.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InternshipPage;
