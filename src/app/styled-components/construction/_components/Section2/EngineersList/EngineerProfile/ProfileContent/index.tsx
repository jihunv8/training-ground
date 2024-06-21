import styled from 'styled-components';
import { screenMiddle } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function ProfileContent({ imageUrl = '', imageAlt = '', name = '', workArea = '', number = '', email = '' }) {
  return (
    <ProfileContentWrapper>
      <ProfileImage src={imageUrl} alt={imageAlt} />
      <Name>{name}</Name>
      <WorkArea>{workArea}</WorkArea>
      <Number>{number}</Number>
      <Email>{email}</Email>
    </ProfileContentWrapper>
  );
}

export default ProfileContent;

const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  margin-top: 20px;
  width: 120px;
  height: 120px;

  @media screen and (max-width: ${screenMiddle}) {
    width: 100px;
    height: 100px;
  }
`;

const Name = styled.div`
  margin-top: 20px;
  color: #313131;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.25rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

const WorkArea = styled.div`
  margin-top: 7px;
  color: #6b6b6b;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  line-height: 0.75rem;
  text-align: center;
`;

const Number = styled.div`
  margin-top: 47px;
  color: #6b6b6b;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6875rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Email = styled.div`
  margin-top: 8px;
  color: #40a2d5;
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.625rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
