import styled from "styled-components";

export const Input = styled.input`
  font-family: monospace, sans-serif;
  color: #000;
  padding: 0.125em;
  height: 1.5em;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #d8d8d8;
  font-size: 1.14285714em;
  width: 2rem;
  margin: 0.1rem;
  margin-left: 0.2rem;

  &:nth-last-of-type(1),
  :nth-last-of-type(2) {
    border: 1px solid black;
  }

  &:focus {
    outline: 0;
  }
`;
