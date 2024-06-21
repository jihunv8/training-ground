import styled from 'styled-components';

import starIcon from '@/app/styled-components/construction/_images/icons/star-icon.png';
import menuIcon from '@/app/styled-components/construction/_images/icons/menu-icon.png';
import Image from 'next/image';

function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      <Image src={starIcon} alt="star-icon" height={22} />
      <Image src={menuIcon} alt="menu-icon" height={22} />
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;

const ProfileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
