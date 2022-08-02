import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Poster = styled.img`
  display: block;
  width: 240px;
  height: auto;
  margin-right: 15px;
`;

export const DetailsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 10px;
`;

export const DetailItem = styled.li`
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Description = styled.p``;
