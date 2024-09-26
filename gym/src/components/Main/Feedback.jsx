import React from 'react';
import './Feedback.css'; // Import the new CSS file
import person from '../../images/person.png'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
// Testimonial component
const Testimonial = ({ text, name, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-icon">❝</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-person">
        <img src={person} alt={name} className="testimonial-avatar" />
        <p className="testimonial-name">{name}</p>
      </div>
    </div>
  );
};

// Main Component
const Feedback = () => {
  const testimonials = [
    {
      text: 'Since starting this program, I have never felt stronger or healthier. The personalized diet plans and expert guidance have transformed my fitness journey. The gym environment is motivating, and Im seeing incredible results week by week. Highly recommend!',
      name: 'Luffy',
      image: {person}, // Replace with actual image URL
    },
    {
      text: 'This is the best decision I have ever made for my health. The combination of a balanced diet and regular workouts at this gym has helped me lose weight, build muscle, and improve my overall well-being. I feel more energized and confident',
      name: 'Prathish',
      image: {person}, // Replace with actual image URL
    },
    {
      text: 'I have been a member for six months now, and the change is unbelievable! The trainers are supportive, the workouts are challenging, and the diet plans are easy to follow. My stamina, strength, and mindset are at an all-time high',
      name: 'Bala',
      image: {person}, // Replace with actual image URL
    },
  ];

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Link to="/dashboard1">
        <ChevronLeftIcon style={{ fontSize: 30,color:"white",backgroundColor:"black",borderRadius:20,position:"absolute",top:20,left:15}} />
      </Link>
      <div className="feedback-container">
      <h2 className="feedback-heading">How We Help People</h2>
      <p className="feedback-subheading">
        With serious savings, a seamless online application, and unique community
        benefits, our members have a lot to say about our loans!
      </p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            image={testimonial.image}
          />
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="feedback-contain">
    <h1>Was this useful?</h1>
    <div className="feedback-options">
      <button className="feedback-button great"><SentimentSatisfiedAltIcon/><span>Yes, it was great!</span></button>
      <button className="feedback-button okay"><SentimentSatisfiedIcon/><span>Sort of, thanks!</span></button>
      <button className="feedback-button not-really"><SentimentVeryDissatisfiedIcon/><span>Not really</span></button>
    </div>
    <p className="suggestion-text">
      Got a suggestion? <a href="#!">Let us know</a>
    </p>
    <div className="extra-options">
      <div className="extra-option">
        <p>Need more help?</p>
        <a href="#!">Contact support</a>
      </div>
      <div className="extra-option">
        <p>Want to give feedback on a feature?</p>
        <a href="#!">Submit your feedback</a>
      </div>
    </div>
      </div>
      </div>
    </div>
    
    </div>
  );
};

export default Feedback;
