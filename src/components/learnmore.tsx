import * as React from 'react';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph　} from './shared';

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
            <p>aa</p>
          </ContactCard>
        </li>
        <li>
          <ContactCard color="#64A3ED">
            <p>aa</p>
          </ContactCard>
        </li>
        <li>
          <ContactCard color="#64A3ED">
            <p>aa</p>
          </ContactCard>
        </li>
      </ContactCards>
    </Wrapper>
  );
};

const ContactCards = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const ContactCard = styled.a`
  background: ${props => props.color};
  display: inline-block;
  width: 300px;
  height: 200px;
`;

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
