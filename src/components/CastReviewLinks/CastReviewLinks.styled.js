import styled from 'styled-components';

export const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
`;

export const LinkItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
