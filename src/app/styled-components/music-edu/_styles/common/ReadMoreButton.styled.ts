import styled from 'styled-components';

const ReadMoreButton = styled.button`
  width: 240px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1875rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #1847b8;

  &:hover {
    background-color: #1847b8;
    color: #fff;
  }
`;

export default ReadMoreButton;
