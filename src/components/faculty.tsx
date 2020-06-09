import * as React from 'react';
import { withPrefix } from 'gatsby';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { CommonHeading, Paragraph } from './shared';

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
  return (
    <Wrapper>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;
        `}
      >
        <CommonHeading en="THE FACULTY" ja="教員紹介" />
        <a href="https://yoshikawaweb.com/element/">担当教員</a>
      </div>
      <TeacherList>
        {faculties.map(teacher => (
          <li key={teacher.name}>
            <TeacherCard href={teacher.href} image={teacher.image}>
              <TeacherContent>
                <span className="teacher-occupation">{teacher.occupation}</span>
                <p className="teacher-name">{teacher.name}</p>
                <p className="teacher-desc">{teacher.desc}</p>
              </TeacherContent>
            </TeacherCard>
          </li>
        ))}
      </TeacherList>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 100px;
`;

const TeacherList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

type TeacherCardProps = {
  image: string;
};
const TeacherCard = styled.a`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  background: linear-gradient(to top, #000000ff, #00000080 30%, #00000000),
    center/cover url(${(props: TeacherCardProps) => withPrefix(`images/teacher/${props.image}`)});
  text-decoration: none;
  color: white;
  &:hover {
    .teacher {
      &-desc {
        display: block;
      }
    }
  }
`;
const TeacherContent = styled.div`
  position: absolute;
  width: 90%;
  bottom: 16px;
  left: 16px;
  .teacher {
    &-occupation {
      font-size: 16px;
      font-weight: bold;
    };
    &-name {
      font-size: 26px;
      font-weight: bold;
    };
    &-desc {
      display: none;
    };
  }
`;
