import styled from 'styled-components';

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
