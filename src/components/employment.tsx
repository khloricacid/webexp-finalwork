import * as React from 'react';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph, CommonButton } from './shared';

export const Employment = (): React.ReactElement => {
  return (
    <Wrapper>
      <CommonHeading
        en="EMPLOYMENT"
        ja="就職実績"
      />
      <EmployContent>
        <div
          css={css`
            width: 350px;
          `}
        >
          <Heading>
            <span className="gradient-text_orange">就職率91.7%。</span>
            強力なサポート体制で就職活動をバックアップします。
          </Heading>
          <Paragraph
            css={css`
              width: 300px;
              margin-top: 16px;
            `}
          >
            DHUはIT・コンテンツ業界に独自の企業ネットワークと9万人を超えるデジタルハリウッド全体の卒業生ネットワークを保有しています。本学の就職率が高いのは、業界とのネットワークの強さと、1年次からのきめ細かい就職サポートで、学生の夢実現を応援しています。
          </Paragraph>
          <CommonButton
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
          <Paragraph
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
const Heading = styled.h3`
  font-weight: bold;
  font-size: 14px;
  span {
    font-size: 26px;
    display: block;
  }
`;
const EmployContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;
