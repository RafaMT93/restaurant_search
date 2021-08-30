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
    max-height: 3.313rem;
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
