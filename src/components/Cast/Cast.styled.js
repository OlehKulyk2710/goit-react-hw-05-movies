import styled from 'styled-components';

export const CastList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Character = styled.p``;

export const ActorName = styled.p`
  margin-bottom: 3px;
`;

export const ActorPhoto = styled.img`
  display: block;
  width: 140px;
  height: auto;
  margin-bottom: 5px;
`;
