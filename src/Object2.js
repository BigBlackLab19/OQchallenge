import React from "react";
import styled from "styled-components";

function Object2() {
  const showCss = (event) => {
    const styles = window.getComputedStyle(event.target);

    console.log(styles.position, styles.width, styles.height, styles.left, styles.top, styles.background, styles.boxShadow, styles.transform);
  };
  return <ObjectTwo onClick={showCss}/>;
}

export default Object2;

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
