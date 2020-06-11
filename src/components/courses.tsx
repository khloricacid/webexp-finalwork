import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph } from './shared';

const intersectionConfig = {
  rootMargin: '0px 0px -20% 0px',
  threshold: 0,
  triggerOnce: true
};
const classvars = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};

export const Courses = (): React.ReactElement => {
  const [C1Ref, C1InView] = useInView(intersectionConfig);
  const [C2Ref, C2InView] = useInView(intersectionConfig);
  const [C3Ref, C3InView] = useInView(intersectionConfig);
  return (
    <Wrapper
      css={css`
        margin-top: 100px;
      `}
    >
      <CommonHeading en="COURSES" ja="授業紹介" />
      <ClassWrapper animate={C1InView ? 'visible' : 'hidden'} variants={classvars} ref={C1Ref}>
        <ClassImage variants={classvars} src={withPrefix('/images/class/web-prot.jpg')} alt="Webサイトプロトタイプ演習" />
        <ClassDescription variants={classvars}>
          <h3>Webサイトプロトタイプ演習</h3>
          <Paragraph>
            サイトマップ、ワイヤーフレーム、プロトタイプの制作は、Webサイト制作において大変重要です。実際に完成させたサイトを手戻りなくするため、Webサイト構築を行なう上で重要となる「設計フェーズ」の理解を深め、精度の高いワイヤーフレームやプロトタイプを出来るようにします。また、プロトタイピングツールを利用した効率の良いプロトタイピング作成手法を理解し、スムーズなWebサイト制作ができる技術を学びます。
          </Paragraph>
        </ClassDescription>
      </ClassWrapper>
      <ClassWrapper animate={C2InView ? 'visible' : 'hidden'} variants={classvars} ref={C2Ref}>
        <ClassImage variants={classvars} src={withPrefix('/images/class/web-dev.jpg')} alt="Webサイト制作実践演習" />
        <ClassDescription variants={classvars}>
          <h3>Webサイト制作実践演習</h3>
          <Paragraph>
            デザインカンプなどを元にコーディング計画を立て、Webサイトの文書構造をイメージし、それを形にするためのHTML、CSSマークアップを繰り返し行なうことで、実務レベルでのWebコーディング手法を理解していきます。さらにアクセシビリティの考え方、レスポンシブWebデザイン、CSSフレームワーク、コーディング効率化を学び、高精度のWebコーディングスキルを習得していきます。
          </Paragraph>
        </ClassDescription>
      </ClassWrapper>
      <ClassWrapper animate={C3InView ? 'visible' : 'hidden'} variants={classvars} ref={C3Ref}>
        <ClassImage variants={classvars} src={withPrefix('/images/class/web-sem.jpg')} alt="コンテンツデザインゼミ" />
        <ClassDescription variants={classvars}>
          <h3>コンテンツデザインゼミ</h3>
          <Paragraph>
            デザインと技術とユーモアを複合的に考え、問題解決のためのアプローチ方法の探求、社会との関係を築くモノ創り、インターネットを活用して自分や自分たちの周りを少し豊かにする方法を考えるといった活動を行っていきます。ゼミで様々な活動やコミュニケーションを行っていく中で、個別に自らが実現したい卒業制作のテーマを設定し、卒業制作を行っていきます。
          </Paragraph>
        </ClassDescription>
      </ClassWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: inline-flex;
  flex-flow: column;
  section + section {
    margin-top: 50px;
  }
  @media screen and (max-width: 960px) {
    padding: 0 32px;
  }
`;

const ClassImage = styled(motion.img)`
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 960px) {
    margin: 32px 0 0 0;
    width: 100%;
    height: 200px;
  }
`;

const ClassDescription = styled(motion.div)`
  margin-left: 60px;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin-top: 8px;
  }
  @media screen and (max-width: 960px) {
    margin: 32px 0 0 0;
    width: 100%;
  }
`;

const ClassWrapper = styled(motion.section)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-top: 32px;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
