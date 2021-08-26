import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 0.313rem;
  border-radius: 6px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #ffffff;
  font-size: 1rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
};

export default ImageCard;
