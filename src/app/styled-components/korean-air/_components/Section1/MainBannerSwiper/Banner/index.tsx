import styled from 'styled-components';
import * as media from '@/app/styled-components/korean-air/_styles/mediaSize';

import rightArrowIcon from '@/app/styled-components/korean-air/_images/icons/right.svg';
import Image from 'next/image';
import { Section1MainBanner } from '../mockBannersData';

type ContentsProps = {
  data: Section1MainBanner;
};

export default function Banner({ data }: ContentsProps) {
  const { title, href, bgImage } = data;
  return (
    <Wrapper>
      <Backgorund>
        <Image src={bgImage.pc.src} alt={bgImage.pc.alt} />
      </Backgorund>
      <Contents>
        <Title>{title}</Title>
        <MoreLink href={href}>자세히 보기</MoreLink>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1840px;
  position: relative;
`;

const Backgorund = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  position: relative;
  max-width: ${media.maxContentsArea};
  height: 480px;
  padding-top: 124px;
  margin: 0 auto;

  @media ${media.maxWidthXLarge} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${media.maxWidthLarge} {
    height: 420px;
    padding: 60px 20px 0 24px;
  }
`;

const Title = styled.h2`
  color: #222;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  line-height: 4.5rem;
  white-space: pre-wrap;

  @media ${media.maxWidthLarge} {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }
`;

const MoreLink = styled.a`
  display: flex;
  margin-top: 40px;
  color: #222;
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;

  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    background: url(${rightArrowIcon.src}) center;
  }

  @media ${media.maxWidthLarge} {
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
