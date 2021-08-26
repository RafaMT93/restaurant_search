import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.313rem;
  padding: 1rem;
  background-color: #ffffff;
  border-left: 0.313rem solid transparent;
  transition: 0.5s ease;
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-left: 0.313rem solid ${({ theme }) => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-heigth: 1.813rem;
  margin-box: 0.625rem;
`;

export const Address = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-heigth: 1.188rem;
  margin-box: 0.625rem;
  margin-top: 0.625rem;
`;

export const RestaurantPhoto = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 0.375rem;
  transition: 0.5s ease;
  :hover {
    width: 5.313rem;
    height: 5.313rem;
  }
`;
