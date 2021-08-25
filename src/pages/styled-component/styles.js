import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 22.5rem;
  height: 100vh;
  overflow-y: auto;
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
