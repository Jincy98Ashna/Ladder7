import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import '../testimonials/testi.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import girl from '../images/girl.jpeg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialData = [
  {
    name: 'Alice Kurian',
    position: 'Customer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias nam ipsum illo beatae eos dolorum asperiores, optio fugit temporibus! Architecto quisquam fugiat totam, quam quis quibusdam nobis? Eius, ratione!',
  },
  {
    name: 'Dayana John',
    position: 'Customer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at neque molestiae voluptatem deserunt aspernatur quibusdam minima ad molestias maiores quis obcaecati sed accusamus, cumque accusantium, dolores sit corporis voluptatum?',
  },
  {
    name: 'John Doe',
    position: 'Customer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at neque molestiae voluptatem deserunt aspernatur quibusdam minima ad molestias maiores quis obcaecati sed accusamus, cumque accusantium, dolores sit corporis voluptatum?',
  },
  {
    name: 'Jane Doe',
    position: 'Customer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at neque molestiae voluptatem deserunt aspernatur quibusdam minima ad molestias maiores quis obcaecati sed accusamus, cumque accusantium, dolores sit corporis voluptatum?',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;

  const nextTestimonials = () => {
    if (currentIndex + testimonialsPerPage < testimonialData.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  return (
    <div className="testimonial-section">
      <br />
      <Typography variant="h5" gutterBottom className='head1' style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '-3%' }}>
        Success Stories
      </Typography>
      
      <div className="testimonial-wrapper">
        <button onClick={prevTestimonials} disabled={currentIndex === 0} className="arrow-button">
          <FaArrowLeft />
        </button>
        
        <div className="testimonial-container">
          {testimonialData.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial, index) => (
            <Card key={index} sx={{ maxWidth: 400 }} className="testimonial-card">
              <CardActionArea>
                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                    {testimonial.text}
                  </Typography>
                  <div className="profile">
                    <img src={girl} alt="Profile" />
                    <div>
                      <Typography variant="body1" style={{ fontWeight: 'lighter', fontSize: '13px' }}>{testimonial.name}</Typography>
                      <Typography variant="body1" style={{ fontWeight: 'normal', fontSize: '12px' }}>{testimonial.position}</Typography>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        
        <button onClick={nextTestimonials} disabled={currentIndex + testimonialsPerPage >= testimonialData.length} className="arrow-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
