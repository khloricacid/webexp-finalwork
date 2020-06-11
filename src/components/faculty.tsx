import * as React from 'react';
import { motion } from 'framer-motion';
import { withPrefix } from 'gatsby';
import { useInView } from 'react-intersection-observer';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonButton, CommonHeading, Paragraph } from './shared';

const faculties = [
  {
    occupation: '准教授',
    name: '栗谷 幸助',
    desc: 'Webデザイン業界への夢先案内人',
    href: 'https://www.dhw.ac.jp/feature/teacher/kuriya/',
    image: 'kuriya.jpg'
  },
  {
    occupation: '准教授',
    name: '小松 学史',
    desc: 'Webサイトフロントエンドエンジニア\nAdobe Flash認定インストラクター',
    href: 'https://www.dhw.ac.jp/feature/teacher/komatsu/',
    image: 'komatsu.jpg'
  },
  {
    occupation: '非常勤講師',
    name: '中村 勇希',
    desc: '「技術であそぶ」がコンセプト。デザイナー出身のフロントエンドエンジニア',
    href: 'https://www.dhw.ac.jp/feature/teacher/yuki_nakamura/',
    image: 'yu_nakamura.jpg'
  }
];

export const Faculty = (): React.ReactElement => {
  const [isScroll, toggleScroll] = React.useState(false);
  const [ref, InView] = useInView({
    rootMargin: '0px 0px -30% 0px',
    threshold: 0,
    triggerOnce: true
  });
  const listvars = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hidden: {
      opacity: 0,
      y: -20
    }
  };

  const handleMouseDown = (e) => {

  }

  return (
    <Wrapper>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;
          @media screen and (max-width: 960px) {
            padding: 0 32px;
          }
        `}
      >
        <CommonHeading en="THE FACULTY" ja="教員紹介" />
        <CommonButton
          animate={InView ? 'visible' : 'hidden'}
          variants={listvars}
          name="教員一覧"
          primaryColor="#353535"
          hoverColor="#f60"
          href="https://www.dhw.ac.jp/feature/teacher/?categories=web"
        />
      </div>
      <ListWrapper>
        <TeacherList ref={ref} animate={InView ? 'visible' : 'hidden'} variants={listvars}>
          {faculties.map((teacher, i) => (
            <motion.li key={teacher.name}>
              <TeacherCard
                id={`teacher-${i}`}
                index={i}
                href={teacher.href}
                image={teacher.image}
                target="_blank"
                rel="norefferer"
              >
                <TeacherContent>
                  <p className="teacher-desc">{teacher.desc}</p>
                  <span className="teacher-occupation">{teacher.occupation}</span>
                  <p className="teacher-name">{teacher.name}</p>
                </TeacherContent>
              </TeacherCard>
            </motion.li>
          ))}
        </TeacherList>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 150px;
`;

const ListWrapper = styled.div`
  @media screen and (max-width: 960px) {
    padding-left: 32px;
    width: calc(100%);
    overflow-x: scroll;
  }
`;

const TeacherList = styled(motion.ul)`
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    li + li {
      margin-left: 16px;
    }
    li:last-child {
      padding-right: 32px;
    }
  }
`;

type TeacherCardProps = {
  image: string;
  index: number;
};
const TeacherCard = styled(motion.a)`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 300px;
  height: 400px;
  border-radius: 5px;
  background: linear-gradient(to top, #000000ff, #00000080 30%, #00000000),
    center/cover url(${(props: TeacherCardProps) => withPrefix(`images/teacher/${props.image}`)});
  text-decoration: none;
  color: white;
  &:hover {
    .teacher {
      &-desc {
        opacity: 1;
        margin-bottom: 8px;
      }
    }
  }
`;
const TeacherContent = styled.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  left: 20px;
  .teacher {
    &-desc {
      opacity: 0;
      transition: 0.4s;
    }
    &-occupation {
      font-size: 16px;
      font-weight: bold;
    }
    &-name {
      font-size: 26px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 960px) {
    .teacher {
      &-desc {
        opacity: 1;
        margin-bottom: 8px;
      }
    }
  }
`;
