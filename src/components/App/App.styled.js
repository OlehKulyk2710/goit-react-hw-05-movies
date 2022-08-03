import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Main = styled.main`
  /* padding-top: 25px;
  padding-bottom: 25px; */
`;

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 3px solid gray;
`;

export const SectionOutlet = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  /* border-bottom: 3px solid gray; */
`;

export const Heading = styled.h2`
  margin: 0;
  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: flex-end;
  color: blue;
  margin-bottom: 10px;

  :focus,
  :hover {
    color: tomato;
  }
`;
