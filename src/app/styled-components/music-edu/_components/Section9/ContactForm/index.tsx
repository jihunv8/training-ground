import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Form from './Form';

function ContactForm() {
  return (
    <ContactFormWrapper>
      <Title>Contact Us</Title>
      <Form />
      <ImageSource>Image from Freepik</ImageSource>
    </ContactFormWrapper>
  );
}

export default ContactForm;

const ContactFormWrapper = styled.div`
  background-color: #fff;
  width: 710px;
  height: 600px;
  margin-left: auto;
  margin-right: 0;
  padding: 30px 40px 30px 180px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-left: 235px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 510px;
    height: 620px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 35px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 473px;
    height: 660px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 100%;
    height: 585px;
  }
`;

const Title = styled.h2`
  color: #111111;
  font-family: oswald, sans-serif;
  font-size: 3.75rem;
  line-height: 110%;
  text-align: center;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    font-size: 2.25rem;
  }
`;

const ImageSource = styled.p`
  color: #111111;
  margin-top: 40px;
  line-height: 160%;
  text-align: center;
`;
