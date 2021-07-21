import React from "react";
import styled from "styled-components";

function ObjectFourStyles() {
  return (
    <Container>
      <p>Object # 4</p>
      <br />
      <p>
        position: absolute;
        <br />
        width: 157.39px;
        <br />
        height: 213px;
        <br />
        left: 859.61px;
        <br />
        top: 430px;
        <br />
        <br />
        background: #fcac3a;
        <br />
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        <br />
        transform: rotate(45deg);
        <br />
      </p>
    </Container>
  );
}

export default ObjectFourStyles;

const Container = styled.div`
  padding-top: 25px;
`;
