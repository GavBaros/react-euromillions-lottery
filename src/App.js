import React, { Component } from "react";
import PlayLine from "./components/PlayLine";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background: #fff100;
  padding: 50px;
  height: 800px;
  position: relative;
`;

const AppWrapper = styled.div`
  font-family: arial, verdana, helvetica, sans-serif;
  text-align: center;
  position: relative;
`;

const PlaySlipWrapper = styled.div`
  width: 500px;
  padding: 100px;
  background-color: white;
`;

const PlaySlipHeader = styled.div`
  text-align: left;

  span {
    font-size: 16px;
    margin-bottom: 0;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const AddPlayLine = styled(PlaySlipHeader)`
  margin-top: 10px;
  cursor: pointer;

  & :hover {
    background: #f4f3f1;
  }

  span {
    margin-right: 8px;
  }

  a {
    font-size: 14px;
    color: #0066cc;
    text-decoration: none;
  }
`;

const DrawDuration = styled.div`
  width: 385px;
  display: flex;
  justify-content: space-between;
`;

const WhichDraws = styled.div`
  margin-top: 15px;
  text-align: left;

  h4 {
    font-size: 16px
    font-weight: normal;
    margin-bottom: 10px;
  }
`;

const WhichDrawsCheckBox = styled.span`
  min-width: 45px;
  text-align: center;
  border: 1px solid lightgray;

  font-size: 13px;
  border-radius: 5px;
  line-height: 2.3em;
  cursor: pointer;
  padding: 7px 10px;

  &:nth-of-type(2) {
    margin-left: 7px;
  }

  &:hover {
    background-color: lightgray;
  }

  &:active {
    background-color: darkgray;
    color: #fff;
  }
`;

const ForHowManyWeeks = styled(WhichDraws)`
  select {
    color: #000;
    width: 180px !important;
    height: 1.5em;
    font-weight: 400;
    background: #fff;
    border-radius: 5px;
    vertical-align: middle;
    border: 1px solid #d8d8d8;
    font-size: 13px;
  }
`;

class App extends Component {
  state = {};

  render() {
    return (
      <AppWrapper>
        <Container>
          <PlaySlipWrapper>
            <PlaySlipHeader>
              <span>Play EuroMillions</span>
              <p>
                Enter 5 numbers from 1 to 50 and 2 Lucky Stars from 1 to 12. Or
                select Lucky Dip.
              </p>
            </PlaySlipHeader>
            <PlayLine />
            <PlayLine />
            <PlayLine />
            <PlayLine />
            <AddPlayLine>
              <a>
                <span className="fa fa-plus" />Add play line
              </a>
            </AddPlayLine>
            <DrawDuration>
              <WhichDraws>
                <h4>Which draws?</h4>
                <WhichDrawsCheckBox>TUE</WhichDrawsCheckBox>
                <WhichDrawsCheckBox>FRI</WhichDrawsCheckBox>
              </WhichDraws>
              <ForHowManyWeeks>
                <h4>For how many weeks?</h4>
                <select>
                  <option value="0">Please select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </ForHowManyWeeks>
            </DrawDuration>
          </PlaySlipWrapper>
        </Container>
      </AppWrapper>
    );
  }
}

export default App;
