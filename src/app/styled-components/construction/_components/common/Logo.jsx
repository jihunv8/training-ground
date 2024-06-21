import styled from 'styled-components';

function Logo() {
  return <LogoWrapper href="">CONSTRUCTION</LogoWrapper>;
}

export default Logo;

const LogoWrapper = styled.a`
  color: #40a2d5;
  font-weight: 600;
  font-size: 25px; //Logo 고정된 크기. rem 사용하지 않음.
`;
