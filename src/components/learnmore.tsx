import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

export const Contact = (): React.ReactElement => {
  return (
    <Wrapper>
      <ArticleHeading>
        <EnHeading>LET&apos;S KEEP IN TOUCH</EnHeading>
        <JpHeading>もっと詳しく知る</JpHeading>
      </ArticleHeading>
      <ContactCards id="contacts">
        <li>
          <ContactCard href="https://www.dhw.ac.jp/entrance/" target="_blank" rel="norefferer" color="#64A3ED">
            <SvgWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
              />
            </SvgWrap>
            <CardContent>
              <EnHeading>ADMISSON INFORMATION</EnHeading>
              <JpHeading>入試情報</JpHeading>
              <CardBody>
                入試方式や選考に関する
                <br />
                情報はこちら
              </CardBody>
            </CardContent>
          </ContactCard>
        </li>
        <li>
          <ContactCard href="https://www.dhw.ac.jp/form/shiryo/" target="_blank" rel="norefferer" color="#706EE8">
            <SvgWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="currentColor"
                d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"
              />
            </SvgWrap>
            <CardContent>
              <EnHeading>REQUEST BROCHURE</EnHeading>
              <JpHeading>資料請求する</JpHeading>
              <CardBody>
                DHUのコンセプトブックや
                <br />
                入試資料を無料でお送りします
              </CardBody>
            </CardContent>
          </ContactCard>
        </li>
        <li>
          <ContactCard href="https://www.dhw.ac.jp/oc/" target="_blank" rel="norefferer" color="#FF6600">
            <SvgWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"
              />
            </SvgWrap>
            <CardContent>
              <EnHeading>OPEN CAMPUS</EnHeading>
              <JpHeading>オープンキャンパス</JpHeading>
              <CardBody>
                DHUの魅力を余すところなく
                <br />
                体感しよう
              </CardBody>
            </CardContent>
          </ContactCard>
        </li>
      </ContactCards>
    </Wrapper>
  );
};

const SvgWrap = styled.svg`
  position: absolute;
  bottom: -50px;
  left: 150px;
  height: 200px;
  opacity: 0;
  transition: 0.4s;
  path {
    fill: #000;
  }
`;

const ContactCards = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;
const ContactCard = styled.a`
  position: relative;
  border-radius: 5px;
  background: ${props => props.color};
  color: white;
  display: inline-block;
  width: 100%;
  height: 200px;
  overflow: hidden;
  &:hover {
    ${SvgWrap} {
      opacity: 0.3;
      bottom: -20px;
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const CardBody = styled.p``;

const ArticleHeading = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;
const EnHeading = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const JpHeading = styled.h2`
  font-weight: bold;
  font-size: 26px;
`;

const Wrapper = styled.article`
  margin-top: 100px;
`;
