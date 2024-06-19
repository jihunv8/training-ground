import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <TempText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </TempText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: #333333;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempText = styled.p`
  width: 420px;
  color: #fff;
  font-size: 0.875rem;
  line-height: 160%;
  text-align: center;
`;
