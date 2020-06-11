import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import CountUp from 'react-countup';
import { CommonHeading, Paragraph, CommonButton } from './shared';

export const Employment = (): React.ReactElement => {
  const [ref, InView, entry] = useInView({
    rootMargin: '0px 0px -60% 0px',
    threshold: 0,
    triggerOnce: true
  });
  const vars = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 0,
      y: -20
    }
  };
  return (
    <Wrapper ref={ref}>
      <CommonHeading en="EMPLOYMENT" ja="就職実績" />
      <EmployContent initial="hidden" animate={InView ? 'visible' : 'hidden'} variants={vars}>
        <div
          css={css`
            width: 350px;
          `}
        >
          <Heading variants={vars}>
            <span className="gradient-text_orange">
              就職率
              {InView ? (
                <React.Fragment>
                  <CountUp duration={4} end={91.7} decimals={1} />
                  %。
                </React.Fragment>
              ) : undefined}
            </span>
            強力なサポート体制で就職活動をバックアップします。
          </Heading>
          <Paragraph variants={vars}
            css={css`
              width: 300px;
              margin-top: 16px;
              margin-bottom: 32px;
            `}
          >
            DHUはIT・コンテンツ業界に独自の企業ネットワークと9万人を超えるデジタルハリウッド全体の卒業生ネットワークを保有しています。本学の就職率が高いのは、業界とのネットワークの強さと、1年次からのきめ細かい就職サポートで、学生の夢実現を応援しています。
          </Paragraph>
          <CommonButton variants={vars}
            name="進路・就職情報"
            primaryColor="#353535"
            hoverColor="#f60"
            href="https://www.dhw.ac.jp/employment/"
          />
        </div>
        <div
          css={css`
            width: 500px;
          `}
        >
          <Paragraph variants={vars}
            css={css`
              font-weight: bold;
              margin-bottom: 1em;
            `}
          >
            主な就職先
          </Paragraph>
          <Paragraph>
            ヤフー（株）／楽天（株）／LINE（株）／（株）リクルートホールディングス／（株）ぐるなび／（株）ソニー・ミュージックアクシス／（株）サミーネットワークス／（株）セブン&アイ・ネットメディア／（株）角川デジックス／（株）大塚商会／SCSK（株）／NTTデータ
            ジェトロニクス（株）／トヨタメディアサービス（株）／昭和シェルビジネス＆ITソリューションズ（株）／沖電気工業（株）／ソフトバンク（株）／（株）アマナ／（株）サイバーエージェント／（株）セプテーニ・ホールディングス／（株）キノトロープ／UUUM（株）／アネックス（株）／富士ソフト（株）／（株）サイバード／（株）エムエム総研／（株）カレッジティアンドケイ／（株）クロス・マーケティング／MHソリューションズ（株）
          </Paragraph>
        </div>
      </EmployContent>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 100px;
`;
const Heading = styled(motion.h3)`
  display: inline-flex;
  flex-flow: column;
  font-weight: bold;
  font-size: 14px;
  span {
    font-size: 36px;
    display: inline-flex;
    align-items: baseline;
  }
`;
const EmployContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;
