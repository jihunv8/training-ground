import styled, { css } from 'styled-components';
import { mediaMiddle, mediaSmall, mediaXLarge, mediaXSmall } from '@/app/styled-components/orion/_styles/mediaSize';
import { EthicalManagementCard } from '../src/ethicalManagementCardData';
import { StaticImageData } from 'next/image';

const getImageUrl = (src: string | StaticImageData) => {
  if (typeof src === 'string') return src;
  return src.src;
};

export type CardProps = {
  data: EthicalManagementCard;
};

export default function Card({ data }: CardProps): JSX.Element {
  const { title, contents, image, imageM, hoverColor } = data;
  return (
    <Wrapper $imageUrl={getImageUrl(image.src)} $imageMUrl={imageM && getImageUrl(imageM.src)}>
      <InnerWrapper href="" $hoverColor={hoverColor}>
        <Title>{title}</Title>
        <Content>{contents}</Content>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ $imageUrl: string; $imageMUrl?: string }>`
  width: 100%;
  background: url(${({ $imageUrl }) => $imageUrl}) no-repeat center/cover;
  position: relative;
  aspect-ratio: 1/1;

  &:last-child {
    grid-row: 1 / span 2;
    grid-column: 4;

    aspect-ratio: auto;
  }

  > img {
    width: 100%;
  }

  @media ${mediaSmall} {
    ${({ $imageMUrl }) => {
      if ($imageMUrl !== undefined) {
        return css`
          background-$imageUrl: url(${$imageMUrl});
        `;
      }
      return null;
    }}

    &:last-child {
      grid-row: 4;
      grid-column: 1 / span 2;
    }
  }
`;

const Content = styled.p`
  margin-top: 0.8rem;
  color: #fff;
  font-size: 2rem;
  opacity: 0;
  position: relative;
  transform: translateY(50px);
  transition: 0.35s ease-in-out;
`;

const InnerWrapper = styled.a<{ $hoverColor: string }>`
  display: block;
  width: 100%;
  height: 100%;
  padding: 40px;
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.35s ease-in-out;

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};

    > ${Content} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${mediaXLarge} {
    padding: 35px;
  }

  @media ${mediaMiddle} {
    padding: 14px;
  }

  @media ${mediaXSmall} {
    padding: 16px;
  }
`;

const Title = styled.h3`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.2;

  @media ${mediaXLarge} {
    font-size: 3.15rem;
  }

  @media ${mediaSmall} {
    font-size: 2.4rem;
  }
`;
