import styled from 'styled-components';

export const Heading = styled.h2`
  margin: 0;
  margin-bottom: 25px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
