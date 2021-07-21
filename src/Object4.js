import React from "react";
import styled from "styled-components";

function Object4() {
  const showCss = (event) => {
    const styles = window.getComputedStyle(event.target);

    console.log(styles.position, styles.width, styles.height, styles.left, styles.top, styles.background, styles.boxShadow, styles.transform);
  };
  return (
    <ObjectFour onClick={showCss}/>
  );
}

export default Object4;

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
