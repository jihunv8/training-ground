import styled, { css } from 'styled-components';
import { screenSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';
import CommonButton from '../../common/buttons/CommonButton.styled';

function Form() {
  return (
    <FormWrapper>
      <InputNameWrapper>
        <InputName />
      </InputNameWrapper>
      <InputInfo placeholder="Email" />
      <InputInfo placeholder="Subject" />
      <InputMessage placeholder="Message" />
      <SendButton $inversion>Send Massage</SendButton>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
`;

const Input = css`
  padding: 20px 24px 17px;
  outline: none;
  border-radius: 7px;
  color: #313131;
  font-size: 1.125rem;
  line-height: 1.6875rem;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

const OtherInput = css`
  margin-top: 20px;
  background-color: #f9f9f9;
  border: none;
`;

const InputNameWrapper = styled.div`
  position: relative;
  &::before {
    content: 'Name';
    display: block;
    background-color: #fff;
    padding: 0 5px;
    position: absolute;
    top: -6px;
    left: 25px;
    color: #6b6b6b;
    font-size: 0.625rem;
    line-height: 0.9375rem;
  }
`;

const InputName = styled.input`
  ${Input}
  width: 100%;
  border: solid 1px #f4f4f4;
`;

const InputInfo = styled.input`
  ${Input}
  ${OtherInput}
`;

const InputMessage = styled.textarea`
  ${Input}
  ${OtherInput}
  height: 200px;
  resize: none;
`;

const SendButton = styled(CommonButton)`
  width: 214px;
  margin-top: 30px;
`;
