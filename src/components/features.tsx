import * as React from 'react';
import { withPrefix } from 'gatsby';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ArticleHeading, EnHeading, JpHeading, Paragraph } from './shared';

type FeatureProps = {
  url: string;
};

export const Features = (): React.ReactElement => {
  return (
    <Container>
      <ArticleHeading
        css={css`
          margin-left: 64px;
          margin-top: 64px;
        `}
      >
        <EnHeading>CHARACTERISTICS OF LEARNING</EnHeading>
        <JpHeading>学びの特色</JpHeading>
      </ArticleHeading>
      <FeatureArticle>
        <FeatureDescription>
          <h3 className="gradient-text_orange">
            基礎から先端技術まで
            <span className="features-description_small">Webサイト制作に関わるすべてを学ぶ</span>
          </h3>
          <Paragraph>
            デザイン系、コード（プログラミング）系の2系統の授業があり、両方を複合的に学んだり、片方に特化して学ぶことができます。Webサイト制作プロジェクト演習ではひとつのテーマについてグループを組み、得意な技術を活かすことができます。
          </Paragraph>
          <CurriculumList>
            <span>授業</span>
            <ul>
              <li>映像制作演習</li>
              <li>デザインベーシック</li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
        {/* eslint-disable-next-line prettier/prettier */}
        <FeatureImage css={css`border-radius: 5px 0 0 5px;`} url={withPrefix('/images/feature/feature-1.jpg')} />
      </FeatureArticle>
      <FeatureArticle>
        {/* eslint-disable-next-line prettier/prettier */}
        <FeatureImage css={css`border-radius: 0 5px 5px 0;`} url={withPrefix('/images/feature/feature-2.jpg')} />
        <FeatureDescription>
          <h3 className="gradient-text_orange">
            新しいWeb表現を探る
            <span className="features-description_small">複合的な学びが得られるカリキュラム</span>
          </h3>
          <Paragraph>
            サイト構築だけでなく、デザインの基礎から動画撮影やゲーム開発に必要なプログラミングまで横断的に学ぶことができます。動画や音楽、ゲームなどを盛り込んだ、バリエーション豊かなサイトの構築手法が身につきます。
          </Paragraph>
          <CurriculumList>
            <span>授業</span>
            <ul>
              <li>映像制作演習</li>
              <li>デザインベーシック</li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
      </FeatureArticle>
      <BusinessArticle>
        <FeatureDescription
          css={css`
            width: 500px;
            filter: drop-shadow(0px 0px 4px #00000040);
          `}
        >
          <h3>
            Webサービスをビジネスに
            <span className="features-description_small">つなげる知識も身につける</span>
          </h3>
          <Paragraph>
            Webサイト制作技術と並行して、リサーチ基礎、プランニング基礎、インターネットマーケティングなど、ビジネス領域の科目を学ぶことでビジネスに活かせるWebの制作を学べます。また新たなWebサービスを生み出すために必要な知識やビジネス的な視点も養うことができます。
          </Paragraph>
          <CurriculumList>
            <span>授業</span>
            <ul>
              <li>映像制作演習</li>
              <li>デザインベーシック</li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
      </BusinessArticle>
    </Container>
  );
};

const FeatureArticle = styled.article`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 500px;
`;

const BusinessArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: center/cover url(${withPrefix('./images/feature/feature-3.jpg')});
  color: white;
`;

const FeatureDescription = styled.div`
  min-width: 500px;
  width: 50%;
  height: fit-content;
  margin: 64px;
  h3 {
    font-size: 32px;
    margin-bottom: 16px;
    span {
      display: block;
      font-size: 26px;
    }
  }
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 100%;
  background: center/cover url(${(props: FeatureProps) => props.url});
`;

const CurriculumList = styled.aside`
  display: inline-flex;
  margin-top: 16px;
  ul {
    list-style: none;
    display: flex;
    li + li {
      margin-left: 1em;
    }
  }
  span {
    font-weight: bold;
    margin-right: 1em;
  }
`;

const Container = styled.div`
  article + article {
    margin-top: 64px;
  }
`;
