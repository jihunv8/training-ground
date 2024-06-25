import styled from 'styled-components';

export default function MockTrustMark() {
  return <Wrapper href="">{'Mock\nTrust\nMark'}</Wrapper>;
}

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border: solid 1px #555;
  border-radius: 100%;
  color: #555;
  font-size: 1rem;
  white-space: pre-wrap;
`;
