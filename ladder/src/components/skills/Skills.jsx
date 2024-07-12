import React from 'react';
import Typography from '@mui/material/Typography';
import '../skills/skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
        Skills Required
      </Typography>
      <div className="button-container">
        <button className="sbtn">Cryptography</button>
        <button className="sbtn">Programming/Scripting</button>
        <button className="sbtn">Vulnerability Management</button>
        <button className="sbtn">Networking</button>
        <button className="sbtn">Risk Management</button>
        <button className="sbtn">Penetration Testing</button>
        <button className="sbtn">Operating Systems</button>
      </div>
    </div>
  );
}

export default Skills;
