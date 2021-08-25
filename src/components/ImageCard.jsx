import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
`;

const ImageCard = ({ photo }) => {
  return <Card photo={photo} />;
};

export default ImageCard;
