import styled from 'styled-components';

const FamilySite = () => {
  return <FamilySiteWrapper>패밀리 사이트</FamilySiteWrapper>;
};

export default FamilySite;

const FamilySiteWrapper = styled.div`
  grid-area: family-site;
  width: 190px;
  height: 44px;
  padding: 0 20px;
  margin-left: 32px;
  border: solid 1px #444;

  display: flex;
  align-items: center;

  color: #d2d2d2;
  font-size: 1.4rem;
  line-height: 1.6;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    margin-top: 18px;
  }
`;
