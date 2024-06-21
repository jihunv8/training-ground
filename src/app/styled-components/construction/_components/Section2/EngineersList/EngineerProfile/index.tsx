import styled from 'styled-components';

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

function EngineerProfile({ imageUrl = '', imageAlt = 'image', name = 'none', workArea = '', number = '', email = '' }) {
  return (
    <EngineerProfileWrapper>
      <ProfileHeader />
      <ProfileContent
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        name={name}
        workArea={workArea}
        number={number}
        email={email}
      />
    </EngineerProfileWrapper>
  );
}

export default EngineerProfile;

const EngineerProfileWrapper = styled.li`
  width: 362px;
  padding: 30px 30px 60px;
  box-shadow: 20px 20px 50px rgba(198, 217, 225, 0.3);

  @media screen and (max-width: ${screenLarge}) {
    width: 300px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 230px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 260px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 100%;
  }
`;
