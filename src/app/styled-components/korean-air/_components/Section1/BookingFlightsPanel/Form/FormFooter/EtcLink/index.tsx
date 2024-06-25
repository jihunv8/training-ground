import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import { ReactNode } from 'react';

import rightArrowIcon from '@/app/styled-components/korean-air/_images/icons/ico-right-white.svg';

function ETCLink({ href, children }: { href: string; children: ReactNode }) {
  return <ETCLinkWrapper href={href}>{children}</ETCLinkWrapper>;
}

export default ETCLink;

const ETCLinkWrapper = styled.a`
  background: url(${rightArrowIcon.src}) no-repeat right center;
  padding: 3px 24px 3px 0;
  display: block;
  color: #fff;
  line-height: 1.5;
  border-radius: 3px;

  &:hover {
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px #0064de;
  }

  @media ${maxWidthLarge} {
    font-size: 1.4rem;
    line-height: 1.57;
  }
`;
