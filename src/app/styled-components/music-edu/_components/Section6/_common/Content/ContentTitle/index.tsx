import { ReactNode } from 'react';
import styled from 'styled-components';

function ContentTitle({ children }: { children: ReactNode }) {
  return <ContentTitleWrapper>{children}</ContentTitleWrapper>;
}

export default ContentTitle;

const ContentTitleWrapper = styled.h2`
  color: #111111;
  font-size: 1.125rem;
  letter-spacing: 0.125rem;
  line-height: 120%;
  font-family: montserrat, sans-serif;
`;
