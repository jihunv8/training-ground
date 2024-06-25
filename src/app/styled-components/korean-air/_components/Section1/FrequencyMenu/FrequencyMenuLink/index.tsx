import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import { ReactNode } from 'react';

type FrequencyMenuLinkProps = {
  href: string;
  children: ReactNode;
  iconUrl: string;
};

function FrequencyMenuLink({ href, children, iconUrl }: FrequencyMenuLinkProps) {
  return (
    <FrequencyMenuLinkWrapper>
      <Anchor href={href}>
        <Icon iconurl={iconUrl} />
        {children}
      </Anchor>
    </FrequencyMenuLinkWrapper>
  );
}

export default FrequencyMenuLink;

const FrequencyMenuLinkWrapper = styled.div`
  width: 100%;
`;

const Icon = styled.span<{ iconurl: string }>`
  background: url(${({ iconurl }) => iconurl}) no-repeat center / 48px;
  display: block;
  width: 48px;
  height: 48px;
`;

const Anchor = styled.a`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.58;

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    flex-direction: column;
    height: fit-content;
    font-size: 1.4rem;
  }
`;
