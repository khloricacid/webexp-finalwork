import * as React from 'react';
import { withPrefix } from 'gatsby';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph } from './shared';

const almuniList = [
  {
    img: withPrefix('/images/almuni/wada.jpg'),
    name: '和田 泰弘',
    company: '株式会社サイバーエージェント',
    body:
      '自分で事業をつくりたいという想いからDHUに入学。Webをイチから学び、在学中から、フリーのWebデザイナーになり、作ったサイトの数は100を越えました。サイバーエージェントへの就職も決まりました。就職先にも応援してもらいながら、撮影機材のシェアリングサービスを在学中に起業することもできました。',
    link: 'https://www.dhw.ac.jp/employment/alumni/wadayasuhiro/'
  },
  {
    img: withPrefix('/images/almuni/takayanagi.jpg'),
    name: '髙栁 綾',
    company: 'ヤフー株式会社',
    body:
      'Webやグラフィックデザイン、英語の授業に夢中になりました。3年の夏に、ヤフー、ネクスト、広告代理店の3社のインターンシップに参加。実践力がつき、就職用のポートフォリオも充実しました。ヤフーでは、提案した企画が高評価をいただき、社員の方と話すうちに「この会社に入りたい！」という気持ちに。',
    link: 'https://www.dhw.ac.jp/employment/alumni/takayanagi/'
  }
];

export const Almunis = (): React.ReactElement => {
  const [ref, InView] = useInView({
    rootMargin: '0px 0px -30% 0px',
    threshold: 0,
    triggerOnce: true
  });

  const vars = {
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
      y: -30,
      opacity: 0
    }
  };

  return (
    <Wrapper>
      <div
        css={css`
          @media screen and (max-width: 960px) {
            padding: 0 32px;
          }
        `}
      >
        <CommonHeading en="GRADUATE" ja="卒業生紹介" />
      </div>
      <div
        css={css`
          @media screen and (max-width: 960px) {
            width: 100%;
            overflow-x: scroll;
            padding: 0 32px;
          }
        `}
      >
        <AlmuniWrapper ref={ref} animate={InView ? 'visible' : 'hidden'} variants={vars}>
          {almuniList.map(person => (
            <AlmuniCard variants={vars} key={person.name}>
              <AlmuniInfo img={person.img}>
                <AlmuniInfoText>
                  <h3>{person.name}</h3>
                  <span>{person.company}</span>
                </AlmuniInfoText>
              </AlmuniInfo>
              <div
                css={css`
                  padding: 26px;
                `}
              >
                <Paragraph>{person.body}</Paragraph>
                <a
                  css={css`
                    display: inline-block;
                    text-decoration: none;
                    color: #f60;
                    margin-top: 1em;
                    &:after {
                      content: '→';
                      opacity: 0;
                      margin-left: 0;
                      transition: 0.4s;
                    }
                    &:hover {
                      &:after {
                        content: '→';
                        opacity: 1;
                        margin-left: 0.5em;
                      }
                    }
                  `}
                  href={person.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  もっと見る
                </a>
              </div>
            </AlmuniCard>
          ))}
        </AlmuniWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 100px;
`;
type AlmuniTypes = {
  img: string;
};
const AlmuniInfo = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  height: 200px;
  overflow: hidden;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #00000080, #00000000 60%),
      ${(props: AlmuniTypes) => `center/cover url(${props.img})`};
    transition: 0.4s;
  }
`;
const AlmuniInfoText = styled.div`
  position: absolute;
  left: 26px;
  bottom: 16px;
  filter: drop-shadow(0px 0px 4px #00000040);
  h3 {
    font-size: 20px;
    &:after {
      content: 'さん';
      margin-left: 0.5em;
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    font-weight: normal;
  }
`;

const AlmuniCard = styled(motion.section)`
  width: 475px;
  background: #f5f5f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    filter: drop-shadow(0px 0px 4px #00000010);
    ${AlmuniInfo} {
      &:before {
        transform: scale(1.05);
      }
    }
  }
  @media screen and (max-width: 960px) {
    width: 85vw;
  }
`;

const AlmuniWrapper = styled(motion.div)`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: inline-flex;
    justify-content: flex-start;
    ${AlmuniCard} + ${AlmuniCard} {
      margin-left: 16px;
    }
    ${AlmuniCard}:last-child {
      margin-right: 32px;
    }
  }
`;
