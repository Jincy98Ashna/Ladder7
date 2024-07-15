import React from 'react';
import '../industry/industry.css';
import Typography from '@mui/material/Typography';
import img1 from '../images/Online learning concept (2).png';
import img2 from '../images/content creator (1).png';

const Industry = () => {
  return (
    <div>
        <br />
        <Typography variant="h6" className='heading' gutterBottom style={{ fontSize: '2rem', fontWeight: 'bolder' }}>
            Select your interested <span className='highlight' style={{ fontWeight: 'bolder' }}>Industry</span>
        </Typography>
        <br />

        <div className='image-container'>
            <div className='image-wrapper'>
                <img src={img1} alt="img1" className='image' />
                <br />
                <Typography variant="body1" className="image-text">
                    Information Technology
                </Typography>
            </div>
            <div className='image-wrapper'>
                <img src={img2} alt="img2" className='image' />
                <br />
                <Typography variant="body1" className="image-text">
                    Finance
                </Typography>
            </div>
        </div>
        <div className='button-container'>
            <button className='common-button'>Let's Start</button>
        </div>
    </div>
  )
}

export default Industry;
