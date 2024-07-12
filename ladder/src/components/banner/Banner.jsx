import React from 'react';
import Typography from '@mui/material/Typography';
import '../banner/banner.css';


const Banner = () => {
  return (
    <div className='bg'>
      <div className="banner-content">
        <div className="typography-container">
          <Typography variant="h5" gutterBottom className='head'>
            Need more information?
          </Typography>
          <Typography  className='banner-text' >
            Write your concern to us and our specialist will get back to you.
          </Typography>
        </div>
        <button className='btn-banner'>Learn More</button>
      </div>
    </div>
  );
}

export default Banner;
