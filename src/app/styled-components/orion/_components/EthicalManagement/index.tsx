import styled from 'styled-components';
import { mediaSmall, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';
import CardList from './CardList';

const EthicalManagement = (): JSX.Element => {
  return (
    <EthicalManagementWrapper>
      <ContentsArea>
        <Header>
          <Title>윤리경영</Title>
          <Content>
            오리온이 지향하는 윤리경영은 준법과 윤리에 기반한 경영활동을 통해 <br />
            모든 이해관계자에게 기여함으로써지속적으로 성장해 나가는 것입니다.
          </Content>
        </Header>
        <CardList />
      </ContentsArea>
    </EthicalManagementWrapper>
  );
};

export default EthicalManagement;

const EthicalManagementWrapper = styled.section`
  margin-top: 140px;
`;

const ContentsArea = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #222;
  font-size: 4.4rem;
  font-weight: 800;
  line-height: 1.4;

  @media ${mediaXLarge} {
    font-size: 3.85rem;
  }

  @media ${mediaSmall} {
    font-size: 2.8rem;
  }
`;

const Content = styled.p`
  margin-top: 1.2rem;
  color: #222;
  font-size: 2rem;
  line-height: 1.4;
  white-space: pre-wrap;
  text-align: center;

  @media ${mediaXLarge} {
    font-size: 1.75rem;
  }

  @media ${mediaSmall} {
    line-height: 1.6;

    > br {
      display: none;
    }
  }
`;
