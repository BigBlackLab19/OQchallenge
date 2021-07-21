import React from "react";
import styled from "styled-components";

function ObjectOneStyles() {
  return (
    <Container>
      <p>Object # 1</p>
      <br />
      <p>
        position: absolute; <br />
        width: 321px; <br />
        height: 213px; <br />
        left: 284px; <br />
        top: 108px; <br />
        <br />
        background-color: #2bc6e7;
      </p>
    </Container>
  );
}

export default ObjectOneStyles;

const Container = styled.div`
  padding-top: 25px;
`;
