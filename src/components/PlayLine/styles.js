import styled from "styled-components";

export const PlayLineWrapper = styled.div`
  background-color: white;
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: whitesmoke;
  }

  & * {
    margin-right: 0.2rem;
  }
`;

export const Button = styled.button`
  min-width: 83px;
  padding-bottom: 1.45rem;
  padding-top: 0.52rem;
  height: 2.25em;
  text-align: center;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: lightgray;
  }
`;

export const Clear = styled.div`
  float: right;
  cursor: pointer;
  height: 1.95rem;
  width: 2rem;
  border-radius: 5px;
  margin-left: 0.2rem;
  margin-top: 0.15rem;
  background-color: #fff;

  &:hover {
    background-color: darkgray;
  }

  &:active {
    background-color: gray;
  }
`;

export const Icon = styled.i`
  &:nth-of-type(1) {
    position: absolute;
    top: 1px;
    right: 82px;
    font-size: 0.8rem;
  }

  &:nth-of-type(2) {
    position: absolute;
    top: 1px;
    right: 37px;
    font-size: 0.8rem;
  }
`;

export const Plus = styled.i`
  transform: rotate(45deg);
  color: #0066cc;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
`;
