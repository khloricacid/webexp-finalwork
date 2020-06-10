import * as React from 'react';
import { withPrefix } from 'gatsby';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import DhuLogo from './logo_static';

const Container = styled.header`
  height: 720px;
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-column-gap: 64px;
  align-items: flex-end;
`;

const TopLink = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  text-align: right;
  text-decoration: none;
  color: #353535;
`;

const Keyvisual = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 100px;
  background: linear-gradient(30deg, #ff660040, #f5be5340), center/cover url(${withPrefix('/images/hero.jpg')});
  z-index: 0;
`;

const Heading = styled(motion.div)`
  margin-bottom: 100px;
`;

const Department = styled(motion.p)`
  color: #888;
  display: inline-flex;
  align-items: center;
  svg {
    width: 64px;
    margin-right: 12px;
    fill: #888;
  }
`;

const LeadText = styled(motion.h1)`
  font-size: 48px;
  line-height: 1.2;
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 14px;
  height: 17px;
  overflow: hidden;
  margin-left: 0.5em;
`;

const GetBrochure = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background: transparent;
  color: #f60;
  padding: 5px 16px;
  border: 1px solid #f60;
  border-radius: 100px;
  span {
    position: absolute;
  }
  &:hover {
    @keyframes arrowAnimation {
      0% {
        bottom: 0;
      }
      60% {
        bottom: -17px;
      }
      61% {
        bottom: 0;
        top: -17px;
      }
      100% {
        top: 0;
      }
    }
    span {
      animation: arrowAnimation 0.8s ease-in-out;
    }
  }
`;

const haloVariant = {
  hidden: {
    y: '-100%',
    transition: {
      duration: 0.6
    }
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const headingVariant = {
  hidden: {
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 0.6
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export const Hero = (): React.ReactElement => {
  const [isHover, toggleHover] = React.useState(false);
  return (
    <Container>
      <TopLink href="https://www.dhw.ac.jp/" target="_blank" rel="norefferer">
        大学HP
      </TopLink>
      <Keyvisual initial="hidden" animate="visible" variants={haloVariant} />
      <Heading initial="hidden" animate="visible" variants={headingVariant}>
        <Department initial={{ y: -100, opacity: 0 }} variants={headingVariant}>
          <DhuLogo />
          <span>Webデザイン･Web開発</span>
        </Department>
        <LeadText
          className="gradient-text_orange"
          initial={{ y: -100, opacity: 0 }}
          variants={headingVariant}
          css={{ marginTop: 16 }}
        >
          Web業界を
          <br />
          リードする
          <br />
          知識と技術を
          <br />
          手に入れよう
        </LeadText>
        <GetBrochure
          initial={{ y: -100, opacity: 0 }}
          whileHover={{ backgroundColor: '#f60', color: '#fff', transition: { duration: 0.2 } }}
          variants={headingVariant}
          css={{ marginTop: 16 }}
          href="#"
        >
          資料請求はこちら
          <ArrowContainer>
            <span>↓</span>
          </ArrowContainer>
        </GetBrochure>
      </Heading>
    </Container>
  );
};
