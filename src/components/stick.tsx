import * as React from 'react';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph } from './shared';
import DhuLogo from './logo_static';

export const StickLink = (): React.ReactElement => {
  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          fill="currentColor"
          d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"
        />
      </svg>
      <span>
        資料請求
        <br />
        オープンキャンパス
      </span>
    </Button>
  );
};

const Button = styled.a`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: bold;
  color: white;
  align-items: center;
  background-color: #f60;
  border-radius: 60px 0 0 60px;
  width: 200px;
  height: 60px;
  position: fixed;
  padding-left: 2.5em;
  right: 0;
  bottom: 64px;
  svg {
    width: 20px;
    margin-right: 1.5em;
  }
`;
