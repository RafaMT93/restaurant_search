import React from 'react';
import styled from 'styled-components';
import Skeleton from './Skeleton';

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 0.313rem;
  border-radius: 6px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #ffffff;
  font-size: 1rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
`;

const ImageCard = ({ photo, title, onClick }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} onClick={onClick}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" heigth="90px" />
      )}
    </>
  );
};

export default ImageCard;
