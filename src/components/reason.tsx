import * as React from 'react';
import { useState } from 'react';
import { withPrefix } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { OIConfig, CommonButton } from './shared';

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

const Text = styled(motion.article)`
  width: 700px;
  display: flex;
  flex-flow: column;
  align-items: center;
  filter: drop-shadow(0px 0px 4px #00000040);
`;

const Heading = styled(motion.div)`
  text-align: center;
`;
const EnHeading = styled(motion.span)`
  font-weight: bold;
  font-size: 16px;
`;
const JpHeading = styled(motion.h2)`
  font-weight: bold;
  font-size: 48px;
`;
const Paragraph = styled(motion.p)`
  line-height: 2.5;
  width: 500px;
`;

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  },
  hidden: {
    y: 100,
    opacity: 0
  }
};

export const Reason: React.FC = (): React.ReactElement => {
  const [ref, inView, entry] = useInView(OIConfig);

  return (
    <Container>
      <Text animate={inView ? 'visible' : 'hidden'} variants={variants} ref={ref}>
        <Heading variants={variants}>
          <EnHeading>WHY DHU</EnHeading>
          <JpHeading>大学でWeb制作を学ぶ理由</JpHeading>
        </Heading>
        <Paragraph
          css={css`
            margin: 16px 0;
          `}
          variants={variants}
        >
          Web制作の知識や技術を活用できる企業や職種は急速な広がりを見せています。
          それに伴ってWeb制作手法を学ぶ方法は、専門学校やスクール、インターネット上の映像教材など幅広く展開されるようになりました。
          デジタルハリウッド大学では技術的な学習と合わせて、語学、マーケティング、リベラルアーツなどこれからの未来を支える人たちに総合的なカリキュラムを設定しています。
          スキルのみではない学びができるのが最大の特徴です。
        </Paragraph>
        <CommonButton name="学部紹介" primaryColor="#fff" hoverColor="#000" href="https://www.dhw.ac.jp/faculty/" />
      </Text>
    </Container>
  );
};
