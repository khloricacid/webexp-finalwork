import * as React from 'react';
import { withPrefix } from 'gatsby';
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
  return (
    <Wrapper>
      <CommonHeading en="GRADUATE" ja="卒業生紹介" />
      <AlmuniWrapper>
        {almuniList.map(person => (
          <AlmuniCard key={person.name}>
            <Heading>
              <AlmuniInfo>
                <AlmuniImage src={person.img} alt={person.name} />
                <AlmuniInfoText>
                  <h3>{person.name}</h3>
                  <span>{person.company}</span>
                </AlmuniInfoText>
              </AlmuniInfo>
              <a href={person.link} target="_blank" rel="norefferer">もっと見る</a>
            </Heading>
            <Paragraph>{person.body}</Paragraph>
          </AlmuniCard>
        ))}
      </AlmuniWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 100px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const AlmuniImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  object-fit: cover;
`;
const AlmuniInfo = styled.div`
  display: flex;
  align-items: center;
`;
const AlmuniInfoText = styled.div`
  margin-left: 16px;
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
const AlmuniWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlmuniCard = styled.section`
  width: 475px;
  height: 250px;
  background: #f5f5f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 26px;
`;
