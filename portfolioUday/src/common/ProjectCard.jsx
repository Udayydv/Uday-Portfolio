import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard({ src, to, h3, p}) {
  return (
    <Link to={to}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </Link>
  );
}

export default ProjectCard;

