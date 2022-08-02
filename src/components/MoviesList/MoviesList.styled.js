import styled from 'styled-components';

export const Movies = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Movie = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
