import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Content = styled.p``;
