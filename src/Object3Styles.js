import React from "react";
import styled from "styled-components";

function ObjectThreeStyles() {
  return (
    <Container>
      <p>Object # 3</p>
      <br />
      <p>
        position: absolute;
        <br />
        width: 321px;
        <br />
        height: 213px;
        <br />
        left: 287px;
        <br />
        top: 439px;
        <br />
        <br />
        background: #000000;
        <br />
        color: white;
        <br />
        border: 1px solid #000000;
        <br />
        box-sizing: border-box;
        <br />
        box-shadow: 10px 25px 5px rgba(0, 0, 0, 0.25);
      </p>
    </Container>
  );
}

export default ObjectThreeStyles;

const Container = styled.div`
  padding-top: 25px;
`;
