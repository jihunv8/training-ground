import styled from 'styled-components';

import arrowIcon from '@/app/styled-components/korean-air/_images/icons/m2ba__link.svg';

type RecomendedLinkProps = {
  title: string;
  subtitle: string;
  href: string;
};

export default function RecomendedLink({ title, subtitle, href }: RecomendedLinkProps) {
  return (
    <Wrapper href={href}>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <ArrowIcon />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  background-color: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 20px 28px 40px;
  width: 100%;

  &:hover,
  &:focus {
    border-radius: 3px;
    outline: solid 1px #0064de;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.5;
`;

const Subtitle = styled.h3`
  margin-top: 10px;
  font-weight: normal;
  line-height: 1.57;
`;

const ArrowIcon = styled.div`
  background: url(${arrowIcon.src}) no-repeat center/ 24px;
  width: 24px;
  height: 24px;
`;
