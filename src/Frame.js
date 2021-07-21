import React, { useState } from "react";
import ObjectOneStyles from "./Object1Styles";
import ObjectTwoStyles from "./Object2Styles";
import ObjectThreeStyles from "./Object3Styles";
import ObjectFourStyles from "./Object4Styles";
import styled from "styled-components";

function Frame() {
  const [objectDisplay, setObjectDisplay] = useState();

  function handleChangeObjectDisplay(num) {
    const styles = {
      1: ObjectOneStyles,
      2: ObjectTwoStyles,
      3: ObjectThreeStyles,
      4: ObjectFourStyles,
    };
   console.log(num)
    setObjectDisplay(styles[num]);
  }
  console.log(objectDisplay)
  return (
    <>
      <TopFrame />
      <Container>
        <LeftSideBar />
        <ObjectOne onClick = {() => {handleChangeObjectDisplay(1)}} />
        <ObjectTwo onClick = {() => {handleChangeObjectDisplay(2)}}/>
        <ObjectThree onClick = {() => {handleChangeObjectDisplay(3)}} />
        <ObjectFour onClick = {() => {handleChangeObjectDisplay(4)}} />
        <RightSideBar>{objectDisplay}</RightSideBar>
      </Container>
    </>
  );
}

export default Frame;
const ObjectOne = styled.div`
  position: absolute;
  width: 321px;
  height: 213px;
  left: 284px;
  top: 108px;
  background-color: #c4c4c4;
`;

const ObjectTwo = styled.div`
  position: absolute;
  width: 137.1px;
  height: 213px;
  left: 773.13px;
  top: 103px;
  background-color: #c92929;
  border: 5px solid #000000;
  box-sizing: border-box;
  transform: rotate(15deg);
`;

const ObjectThree = styled.div`
  position: absolute;
  width: 321px;
  height: 213px;
  left: 287px;
  top: 439px;

  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 10px 25px 5px rgba(0, 0, 0, 0.25);
`;

const ObjectFour = styled.div`
  position: absolute;
  width: 157.39px;
  height: 213px;
  left: 859.61px;
  top: 430px;

  background: #36c929;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(45deg);
`;

const TopFrame = styled.div`
  width: 100%;
  height: 53px;
  background-color: #c4c4c4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSideBar = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #747474;
`;

const RightSideBar = styled.div`
  padding: 0 10px;
  display: flex;
  width: 220px;
  height: 100vh;
  border: 2px solid #000000;
  position: absolute;
  right: 0;
`;
