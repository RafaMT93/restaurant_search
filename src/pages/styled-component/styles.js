import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 22.5rem;
  height: 100vh;
  overflow-y: auto;
  overflox-x: hidden !important;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 18px;
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 1.25rem;
  margin-left: 25%;
`;

export const Map = styled.div`
  background-color: red;
  width: 100%;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 1.875rem;
    max-height: 125px;
    min-height: 100px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.83rem;
  margin: 1rem 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 0.625rem;
  letter-spacing: 0.11px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.813rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.188rem;
  font-size: 1rem;
  font-weight: normal;
`;

export const ModalContentRestaurantOpened = styled.p`
  margin-bottom: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: green;
  line-height: 1.188rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const ModalContentRestaurantClosed = styled.p`
  margin-bottom: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: red;
  line-height: 1.188rem;
  font-size: 1rem;
  font-weight: bold;
`;
