import styled from 'styled-components';
import { mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

const Address = () => {
  return (
    <AddressWrapper>
      <p>
        <Content>(주)오리온 서울 XX구 XX로 XX길 00</Content>
        <Content>
          <Key>사업자등록번호</Key> 123-45-67899
        </Content>
        <Content>
          <Key>대표이사</Key> XXX
        </Content>
      </p>
      <p>
        <Content>
          <Key>전화번호</Key> 01.234.5678
        </Content>
        <Content>
          <Key>고객센터</Key> 080.123.4567(수신자 부담)
        </Content>
        <Content>
          <Key>제품 구입문의</Key> 02.345.6789
        </Content>
      </p>
    </AddressWrapper>
  );
};

export default Address;

const AddressWrapper = styled.div`
  grid-area: address;
  margin-top: 26px;

  > p {
    color: #d2d2d2;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;

    &:last-child {
      margin-top: 5px;
    }
  }

  @media ${mediaXLarge} {
    margin-top: 22px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 18px;

    > p {
      color: #777;
    }
  }
`;

const Content = styled.span`
  display: inline-block;
  margin-right: 16px;

  @media ${mediaXLarge} {
    margin-right: 14px;
  }
`;

const Key = styled.span`
  color: #777;
`;
