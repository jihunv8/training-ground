import styled, { css } from 'styled-components';

import LinkRecomender from './LinkRecomender';

import TripRecomender from './TripRecomender';

export default function Section2() {
  return (
    <Wrapper>
      <TripRecomender />
      <Background />
      <LinkRecomender />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 60px;
`;

const Background = styled.div`
  background-color: #f3f4f8;
  height: 238px;
  margin-top: -238px;
`;
