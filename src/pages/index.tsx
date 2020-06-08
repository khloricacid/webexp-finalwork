import * as React from 'react';
import 'ress';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import { useIntersection } from 'react-use';
import { Loader } from '../components/load';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { Reason } from '../components/reason';

export const intersectionRef = React.useRef(null);

const App = (): React.ReactElement => {
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(intersection);
  }, []);
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
      </main>
    </React.Fragment>
  );
};

export default App;
