import * as React from 'react';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const Logo = styled.svg`
  width: 15vmin;
  #wrap_all path {
    fill: #f60;
    stroke: #f60;
    stroke-width: 4px;
    stroke-linecap: round;
    animation: svg 5s ease-in both infinite;
  }
  @keyframes svg {
    0% {
      fill: transparent;
      stroke-dasharray: 2000px;
      stroke-dashoffset: 2000px;
    }
    20% {
      stroke-dashoffset: 0;
    }
    30% {
      fill: transparent;
    }
    50% {
      fill: transparent;
    }
  }
`;

export const Loader = (): React.ReactElement => {
  return (
    <Container>
      <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 295">
        <g id="wrap_all" data-name="svgGroup">
          <path
            d="M294.7,165.2l-4.7,94.1c-0.2,4.8-2.4,8.1-6.7,9.9c-4.3,1.8-9.3,1.5-14.9-0.8l-60.8-25.2
          c-7.7-3.2-11.5-8.3-11.6-15.3c0-1.6,0.3-3.1,0.9-4.6l24.4-62.9c0.4-0.8,0.5-1.7,0.3-2.7c-0.6-3.7-3.6-6.2-8.9-7.6l-38.9-10.5
          c-2.4-0.6-5-0.6-7.6,0.1c-2.7,0.7-4.7,1.8-6.2,3.3l-44.9,45.2c-2.3,2.5-5.2,4.3-8.8,5.2c-3.6,1-6.8,0.9-9.4-0.2l-30.1-12.5
          c-3.9-1.6-4.4-4.4-1.6-8.3c0.6-0.9,1.5-1.8,2.5-2.6l83.8-66.5L72.2,86.1c-2.1-0.4-2.3-1.3-0.6-2.5c0.4-0.3,0.9-0.6,1.5-0.9
          l34.3-16.2c1.1-0.5,2.4-0.9,3.9-1.1c1.5-0.3,2.9-0.3,4-0.2l31.8,4.6c1.3,0.2,2.8,0.1,4.4-0.2c1.6-0.3,2.9-0.7,3.8-1.3l55.8-30.7
          c0.6-0.4,1.6-0.7,2.9-0.9c1.3-0.2,2.6-0.3,3.8-0.2l3.4,0.4c2.3,0.2,3.4,0.7,3.2,1.5c0,0.2-0.2,0.4-0.4,0.5l-48.6,38
          c-0.8,0.7-2.1,1.2-3.9,1.5c-1.7,0.3-3.4,0.4-5,0.1l-37-5.7c-1.3-0.2-2.7-0.1-4.4,0.2c-1.7,0.3-3,0.7-4.1,1.3l-14,8
          c-0.6,0.3-1,0.6-1.3,0.9c-1.4,1.3-1,2.2,1.4,2.6l68.4,13.9l13.6,2.5c3.5,0.6,4.9,1.7,4.5,3.6c-0.1,0.5-0.5,0.8-0.8,1.2l-1.4,1.5
          l-14.2,15.2c-0.5,0.6-0.8,1.1-1,1.7c-0.7,2.4,0.9,4.1,4.9,5.1l100.3,23.5c6.3,1.5,10.5,4.2,12.5,8.4
          C294.6,163.5,294.8,164.4,294.7,165.2z"
          />
          <path
            d="M246,28.1c0.3,2.7-7,4.8-16.4,4.8c-9.3,0-17.2-2.2-17.5-4.8c-0.3-2.7,7-4.8,16.3-4.8
          C237.8,23.3,245.7,25.5,246,28.1z"
          />
        </g>
      </Logo>
    </Container>
  );
};
