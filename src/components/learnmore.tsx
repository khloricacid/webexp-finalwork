import * as React from 'react';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph } from './shared';

export const Contact = (): React.ReactElement => {
  return (
    <Wrapper>
      <ArticleHeading>
        <EnHeading>LET&apos;S KEEP IN TOUCH</EnHeading>
        <JpHeading>もっと詳しく知る</JpHeading>
      </ArticleHeading>
      <ContactCards>
        <li>
          <ContactCard color="#64A3ED">
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
          <ContactCard color="#706EE8">
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
          <ContactCard color="#FF6600">
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
