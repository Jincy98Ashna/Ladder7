
import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import '../cards/cards.css'; 

const Cards = () => {
  return (
    <div className="cards-container">
      <Typography variant="h5" gutterBottom className='head1' style={{ fontWeight: 'bold' }}>
        Explore More
      </Typography>
      <div className="cards-wrapper">
        <Card className="card">
          <div className="card-media-wrapper">
            <CardMedia
              component="img"
              alt="Machine Learning Engineer"
              className="card-media"
              image={img1}
            />
          </div>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h6" component="div" className='subhead'>
              Machine Learning Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary" className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae exercitationem voluptates corrupti? Doloribus cum omnis eaque. Maiores fuga porro vero suscipit temporibus, officiis dolor aspernatur, corporis consequuntur, adipisci atque.
            </Typography>
            <Button size="small" className='btn'>Learn More</Button>
          </CardContent>
        </Card>

        <Card className="card">
          <div className="card-media-wrapper">
            <CardMedia
              component="img"
              alt="Cyber Security Analyst"
              className="card-media"
              image={img2}
            />
          </div>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h6" component="div" className='subhead'>
              Cyber Security Analyst
            </Typography>
            <Typography variant="body2" color="text.secondary" className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae exercitationem voluptates corrupti? Doloribus cum omnis eaque. Maiores fuga porro vero suscipit temporibus, officiis dolor aspernatur, corporis consequuntur, adipisci atque.
            </Typography>
            <Button size="small" className='btn'>Learn More</Button>
          </CardContent>
        </Card>

        <Card className="card">
          <div className="card-media-wrapper">
            <CardMedia
              component="img"
              alt="Cloud Solutions Architect"
              className="card-media"
              image={img3}
            />
          </div>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h6" component="div" className='subhead'>
              Cloud Solutions Architect
            </Typography>
            <Typography variant="body2" color="text.secondary" className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae exercitationem voluptates corrupti? Doloribus cum omnis eaque. Maiores fuga porro vero suscipit temporibus, officiis dolor aspernatur, corporis consequuntur, adipisci atque.
            </Typography>
            <Button size="small" className='btn'>Learn More</Button>
          </CardContent>
        </Card>
      </div>
      <button className='btn-last'>More</button>
    </div>
  );
};

export default Cards;
