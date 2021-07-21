import React from "react";
import styled from "styled-components";

function ObjectTwoStyles() {
  return (
    <Container>
      <p>Object # 2</p>
      <br />
      <p>
        position: absolute; <br />
        width: 137.1px; <br />
        height: 213px; <br />
        left: 773.13px; <br />
        top: 103px; <br />
        <br />
        background-color: #d6d6d7; <br />
        border: 5px solid #000000; <br />
        box-sizing: border-box; <br />
        transform: rotate(15deg); <br />
      </p>
    </Container>
  );
}

export default ObjectTwoStyles;

const Container = styled.div`
  padding-top: 25px;
`;
