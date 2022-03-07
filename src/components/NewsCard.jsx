import React from 'react';

const NewsCard = ({ content }) => {
  return (
    <div>
      <h3>{content.title}</h3>
    </div>
  );
};

export default NewsCard;
