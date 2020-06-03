import * as React from 'react';
import { withPrefix } from 'gatsby';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import DhuLogo from './logo_static';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 64px;
  height: 100vh;
  min-height: 800px;
  background: linear-gradient(180deg, #fff, #ffffff40), center/cover url(${withPrefix('/images/web_overview_poster_large.jpg')});
`;

export default () => {
  return (
    <Container>
      <span>WHY DHU</span>
      <h2>大学でWeb制作を学ぶ理由</h2>
      <p>
        Web制作の知識や技術を活用できる企業や職種は急速な広がりを見せています。
        それに伴ってWeb制作手法を学ぶ方法は、専門学校やスクール、インターネット上の映像教材など幅広く展開されるようになりました。
        デジタルハリウッド大学では技術的な学習と合わせて、語学、マーケティング、リベラルアーツなどこれからの未来を支える人たちに総合的なカリキュラムを設定しています。
        スキルのみではない学びができるのが最大の特徴です。
      </p>
    </Container>
  )
}