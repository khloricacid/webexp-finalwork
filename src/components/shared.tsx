import * as React from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const OIConfig = {
  rootMargin: '0px 0px -30% 0px',
  threshold: 0,
  triggerOnce: true
};

export const ArticleHeading = styled(motion.div)`
  display: inline-block;
  text-align: left;
`;
export const EnHeading = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
export const JpHeading = styled.h2`
  font-weight: bold;
  font-size: 26px;
`;

type HeadingProps = {
  en: string;
  ja: string;
};
export const CommonHeading = ({ en, ja }: HeadingProps) => {
  const [HRef, HInView, HEntry] = useInView(OIConfig);
  const variants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <ArticleHeading ref={HRef} initial="hidden" animate={HInView ? 'visible' : 'hidden'} variants={variants}>
      <EnHeading>{en}</EnHeading>
      <JpHeading>{ja}</JpHeading>
    </ArticleHeading>
  );
};

type ButtonProps = {
  name: string;
  href: string;
  primaryColor: string;
  hoverColor: string;
  animate: string;
  variants: Variants;
};
export const CommonButton = ({
  name,
  href,
  primaryColor,
  hoverColor,
  animate = undefined,
  variants = undefined
}: ButtonProps) => {
  const Button = styled(motion.a)`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0 26px;
    height: 40px;
    border: 1px solid ${primaryColor ?? '#000'};
    border-radius: 40px;
    color: ${primaryColor ?? '#000'};
    &:hover {
      background-color: ${primaryColor ?? '#fff'};
      color: ${primaryColor === '#353535' ? '#fff' : hoverColor ?? '#000'};
    }
  `;
  return (
    <Button href={href} animate={animate} initial="hidden" variants={variants} target="_blank" rel="norefferer">
      {name}
    </Button>
  );
};

export const Paragraph = styled(motion.p)`
  line-height: 26px;
`;

export const Wrapper960 = styled.div`
  width: 960px;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0;
    margin-top: 32px;
    width: 100%;
  }
`;

export const handleScroll = (target: HTMLElement | null) => {
  target?.scrollIntoView({
    behavior: 'smooth'
  });
};
