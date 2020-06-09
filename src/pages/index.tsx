import * as React from 'react';
import 'ress';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import { Loader } from '../components/load';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { Reason } from '../components/reason';
import { Courses } from '../components/courses';
import { Faculty } from '../components/faculty';
import { Employment } from '../components/employment';
import { Almunis } from '../components/almuni';
import { Contact } from '../components/learnmore';
import { Wrapper960 } from '../components/shared';

const App = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://rsms.me/inter/inter.css');
          html {
            font-family: 'Inter', sans-serif;
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
        `}
      />
      {/* <Loader /> */}
      <Hero />
      <main>
        <Reason />
        <Features />
        <Wrapper960>
          <Courses />
          <Faculty />
          <Employment />
          <Almunis />
          <Contact />
        </Wrapper960>
      </main>
    </React.Fragment>
  );
};

export default App;
