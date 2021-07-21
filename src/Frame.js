import React, { useState } from "react";
import styled from "styled-components";

import { styleConfig } from './styleConfig';

function Frame() {
  const [activeObject, setActiveObject] = useState(undefined);

  const sidebarDisplay = activeObject && (
    <>
      <p>Object #{activeObject}</p>
      <p>{styleConfig[activeObject]}</p>
    </>
  );

  return (
    <>
      <TopFrame />
      <Container>
        <LeftSideBar />
        <ObjectOne onClick = {() => {setActiveObject(1)}} />
        <ObjectTwo onClick = {() => {setActiveObject(2)}}/>
        <ObjectThree onClick = {() => {setActiveObject(3)}} />
        <ObjectFour onClick = {() => {setActiveObject(4)}} />
        <RightSideBar>{sidebarDisplay}</RightSideBar>
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
