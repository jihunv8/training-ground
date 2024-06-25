import styled from 'styled-components';

import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';
import { useState } from 'react';

import footerSiteLinksData from './src/footerSiteLinksData';

import LinkList from './LinkList';

export default function LinkNav() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const createToggleHandler = (i: number) => () => {
    if (expandedIndex === i) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(i);
    }
  };

  return (
    <Wrapper>
      {footerSiteLinksData.map((linkData, i) => (
        <LinkList key={i} data={linkData} isExpanded={i === expandedIndex} onToggle={createToggleHandler(i)} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding-right: 26.57%;
  display: flex;
  justify-content: space-between;

  @media ${maxWidthLarge} {
    flex-direction: column;
    padding-right: 0;
  }
`;
