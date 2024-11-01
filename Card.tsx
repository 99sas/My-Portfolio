import React from 'react';

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className="card"data-aos="zoom-in-up">
      <img src={img} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
