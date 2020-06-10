import * as React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ArticleHeading = styled.div`
  display: inline-block;
  text-align: left;
`;
export const EnHeading = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
export const JpHeading = styled.h2`
  font-weight: bold;
  font-size: 26px;
`;

type HeadingProps = {
  en: string;
  ja: string;
};
export const CommonHeading = ({ en, ja }: HeadingProps) => {
  return (
    <ArticleHeading>
      <EnHeading>{en}</EnHeading>
      <JpHeading>{ja}</JpHeading>
    </ArticleHeading>
  );
};

type ButtonProps = {
  name: string;
  href: string;
  primaryColor: string;
  hoverColor: string;
};
export const CommonButton = ({ name, href, primaryColor, hoverColor }: ButtonProps) => {
  const Button = styled(motion.a)`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0 26px;
    height: 40px;
    border: 1px solid ${primaryColor ?? '#000'};
    border-radius: 40px;
    color: ${primaryColor ?? '#000'};
    &:hover {
      background-color: ${primaryColor ?? '#fff'};
      color: ${primaryColor === '#353535' ? '#fff' : hoverColor ?? '#000'};
    }
  `;
  return (
    <Button href={href} target="_blank" rel="norefferer">
      {name}
    </Button>
  );
};

export const Paragraph = styled.p`
  line-height: 26px;
`;

export const Wrapper960 = styled.div`
  width: 960px;
  margin: 0 auto;
`;
