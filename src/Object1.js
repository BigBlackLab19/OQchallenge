import React from "react";
import styled from "styled-components";

function Object1() {
  const showCss = (event) => {
    const styles = window.getComputedStyle(event.target);

    console.log(styles.position, styles.width, styles.height, styles.left, styles.top, styles.background, styles.boxShadow, styles.transform);
  };
  return <ObjectOne onClick={showCss}/>;
}

export default Object1;

const ObjectOne = styled.div`
  position: absolute;
  width: 321px;
  height: 213px;
  left: 284px;
  top: 108px;
  background-color: #c4c4c4;
`;
