import * as React from 'react';
import { withPrefix } from 'gatsby';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 64px;
  height: 800px;
  min-height: 800px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 85.45%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)),
    center/cover url(${withPrefix('/images/reason.jpg')});
  color: white;
`;

const Text = styled.article`
  width: 700px;
  display: flex;
  flex-flow: column;
  align-items: center;
  filter: drop-shadow(0px 0px 4px #00000040);
`;

const Heading = styled.div`
  text-align: center;
`;
const EnHeading = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const JpHeading = styled.h2`
  font-weight: bold;
  font-size: 48px;
`;
const Paragraph = styled.p`
  line-height: 2.5;
  width: 500px;
`;

export const Reason: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Text>
        <Heading>
          <EnHeading>WHY DHU</EnHeading>
          <JpHeading>大学でWeb制作を学ぶ理由</JpHeading>
        </Heading>
        <Paragraph
          css={css`
            margin-top: 16px;
          `}
        >
          Web制作の知識や技術を活用できる企業や職種は急速な広がりを見せています。
          それに伴ってWeb制作手法を学ぶ方法は、専門学校やスクール、インターネット上の映像教材など幅広く展開されるようになりました。
          デジタルハリウッド大学では技術的な学習と合わせて、語学、マーケティング、リベラルアーツなどこれからの未来を支える人たちに総合的なカリキュラムを設定しています。
          スキルのみではない学びができるのが最大の特徴です。
        </Paragraph>
      </Text>
    </Container>
  )
}