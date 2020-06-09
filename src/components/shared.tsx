import * as React from 'react';
import styled from '@emotion/styled';

export const ArticleHeading = styled.div`
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

export const Paragraph = styled.p`
  line-height: 26px;
`;

export const Wrapper960 = styled.div`
  width: 960px;
  margin: 0 auto;
`;
