import styled, { css } from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

function Form() {
  return (
    <FormWrapper>
      <Input placeholder="Enter your Name" />
      <Input type="email" placeholder="Enter a valid email address" />
      <TextArea placeholder="Enter your message" />
      <SubmitButton>SUBMIT</SubmitButton>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
  width: 447px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 100%;
  }
`;

const CommonInputStyle = css`
  color: #111;
  font-size: 1rem;
  padding: 10px 12px;
  border: none;
  border-bottom: solid 2px #000;
  outline: none;
`;

const Input = styled.input`
  margin-bottom: 28px;
  ${CommonInputStyle}
`;

const TextArea = styled.textarea`
  margin-bottom: 28px;
  height: 108px;
  resize: none;
  ${CommonInputStyle}
`;

const SubmitButton = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
