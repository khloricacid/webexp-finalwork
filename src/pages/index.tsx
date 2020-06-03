import * as React from 'react';
import 'ress';
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import Halo from '../components/halo';
import Reason from '../components/reason';

export default function Home() {
  return (
    <React.Fragment>
      <Global styles={css`
        p, a {
          font-size: 14px;
        }
      `}/>
      <Halo />
      <Reason />
    </React.Fragment>
  )
}
