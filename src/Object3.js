import React from "react";
import styled from "styled-components";

function Object3() {
  const showCss = (event) => {
    const styles = window.getComputedStyle(event.target);

    console.log(styles.position, styles.width, styles.height, styles.left, styles.top, styles.background, styles.boxShadow, styles.transform);
  };
  return <ObjectThree onClick={showCss}/>;
}

export default Object3;

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
