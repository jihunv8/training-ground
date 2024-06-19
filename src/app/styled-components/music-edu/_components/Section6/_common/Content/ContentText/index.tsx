import { ReactNode } from 'react';
import styled from 'styled-components';

function ContentText({ children }: { children: ReactNode }) {
  return <ContentTextWrapper>{children}</ContentTextWrapper>;
}

export default ContentText;

const ContentTextWrapper = styled.div`
  margin-top: 20px;
  color: #111111;
  font-family: Montserrat, sans-serif;
  line-height: 160%;
  text-align: justify;
`;
