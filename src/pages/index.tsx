import * as React from 'react';
import 'ress';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import { Loader } from '../components/load';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { Reason } from '../components/reason';

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
            font-size: 14px;
            min-width: 1200px;
          }
        `}
      />
      {/* <Loader /> */}
      <Hero />
      <main>
        <Reason />
        <Features />
      </main>
    </React.Fragment>
  );
};

export default App;
