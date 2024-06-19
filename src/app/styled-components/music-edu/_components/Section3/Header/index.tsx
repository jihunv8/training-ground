import styled from 'styled-components';

import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

function Header() {
  return (
    <HeaderWrapper>
      <Title>Music Education</Title>
      <Description>
        The beauty of running is that it can be done in a variety of places, by people of all abilities, at distances
        both short and long.
      </Description>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #1847b8;
  font-size: 3.75rem;
  font-family: oswald, sans-serif;
  font-weight: normal;
  line-height: 110%;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  max-width: 720px;
  margin-top: 20px;
  line-height: 160%;
  text-align: center;
`;
