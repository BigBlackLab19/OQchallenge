import React from "react";
import ObjectOne from "./Object1";
import ObjectTwo from "./Object2";
import ObjectThree from "./Object3";
import ObjectFour from "./Object4";
import styled from "styled-components";

function Frame() {
  return (
    <>
      <TopFrame />
      <Container>
        <LeftSideBar />
        <ObjectOne />
        <ObjectTwo />
        <ObjectThree />
        <ObjectFour />
        <RightSideBar />
      </Container>
    </>
  );
}

export default Frame;

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
  width: 220px;
  height: 100vh;
  border: 2px solid #000000;
  position: absolute;
  right: 0;
`;
