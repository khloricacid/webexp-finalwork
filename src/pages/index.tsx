import * as React from 'react';
import Helmet from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import 'ress';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Loader } from '../components/load';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { Reason } from '../components/reason';
import { Courses } from '../components/courses';
import { Faculty } from '../components/faculty';
import { Employment } from '../components/employment';
import { Almunis } from '../components/almuni';
import { Contact } from '../components/learnmore';
import { Footer } from '../components/footer';
import { StickLink } from '../components/stick';
import { Wrapper960 } from '../components/shared';

const Disclaimer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background: black;
  z-index: 9999;
  padding: 20px;
  opacity: 0.6;
`;

const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'ja'
        }}
        title="[Web表現演習] 最終課題"
      />
      <Global
        styles={css`
          @import url('https://rsms.me/inter/inter.css');
          html {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
          }
          @supports (font-variation-settings: normal) {
            html {
              font-family: 'Inter var', sans-serif;
            }
          }
          body {
            color: #353535;
            font-size: 14px;
            min-width: 1200px;
          }
          .gradient-text {
            &_orange {
              color: #f60;
              background: linear-gradient(30deg, #ff6600, #f5be53);
              background-clip: text;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          @media screen and (max-width: 960px) {
            body {
              margin: 0;
              min-width: 0;
            }
          }
        `}
      />
      {/* <Loader /> */}
      <StickLink />
      <Hero />
      <main css={{ width: '100%' }}>
        <Reason />
        <Features />
        <Wrapper960>
          <Courses />
          <Faculty />
          <Employment />
          <Almunis />
          <Contact />
          <Footer />
        </Wrapper960>
      </main>
    </React.Fragment>
  );
};

export default App;
