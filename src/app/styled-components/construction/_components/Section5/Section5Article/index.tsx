import styled from 'styled-components';

import BlogCard from './BlogCard';

import blog1Image from '@/app/styled-components/construction/_images/blog1-img.png';
import blog2Image from '@/app/styled-components/construction/_images/blog2-img.png';
import { screenMiddle, screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

const tempTitle = 'Unleash Your Creativity';
const tempText = 'Nine for Mortal Men, doomed to die, One for';

function Section5Article() {
  return (
    <Section5ArticleWrapper>
      <BlogCard title={tempTitle} text={tempText} bgUrl={blog1Image.src} />
      <BlogCard title={tempTitle} text={tempText} bgUrl={blog2Image.src} readmoreBtn />
    </Section5ArticleWrapper>
  );
}

export default Section5Article;

const Section5ArticleWrapper = styled.article`
  margin-top: 80px;
  padding-right: 92px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #cbcbcb;
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: #40a2d5;
  }

  &::-webkit-scrollbar-track {
  }

  @media screen and (max-width: ${screenMiddle}) {
    padding-right: 20px;
  }

  @media screen and (max-width: ${screenSmall}) {
    padding-left: 60px;
    height: 371px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    padding-left: 10px;
    padding-right: 10px;
    height: 269px;
  }
`;
