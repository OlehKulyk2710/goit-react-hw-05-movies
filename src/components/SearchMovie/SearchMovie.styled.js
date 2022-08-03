import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  margin-right: 2px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 3px;
  border: 3px solid black;
  border-radius: 5px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }

  :active,
  :hover,
  :focus {
    outline: none;
    border: 3px solid green;
    border-radius: 5px;
  }
`;
export const Submit = styled.button`
  font-size: 16px;
  padding: 3px;
  outline: none;
  border: 3px solid black;
  border-radius: 5px;

  :hover {
    border: 3px solid green;
    background-color: tomato;
    color: white;
    border-radius: 5px;
  }
`;
