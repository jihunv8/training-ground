import styled from 'styled-components';

import iconYoutube from '@/app/styled-components/orion/_images/footer/icon_youtube.png';
import iconInstagram from '@/app/styled-components/orion/_images/footer/icon_instagram.png';
import iconBlog from '@/app/styled-components/orion/_images/footer/icon_blog.png';
import iconFacebook from '@/app/styled-components/orion/_images/footer/icon_facebook.png';
import { mediaSmall } from '@/app/styled-components/orion/_styles/mediaSize';

const SNSButtonContainer = () => {
  return (
    <SNSButtonContainerWrapper>
      <Anchor href="" $imageUrl={iconYoutube.src} />
      <Anchor href="" $imageUrl={iconInstagram.src} />
      <Anchor href="" $imageUrl={iconBlog.src} />
      <Anchor href="" $imageUrl={iconFacebook.src} />
    </SNSButtonContainerWrapper>
  );
};

export default SNSButtonContainer;

const SNSButtonContainerWrapper = styled.div`
  justify-self: end;

  display: flex;
  align-items: center;

  @media ${mediaSmall} {
    margin-top: 18px;
  }
`;

const Anchor = styled.a<{ $imageUrl: string }>`
  display: block;
  width: 36px;
  height: 36px;
  background: url(${({ $imageUrl }) => $imageUrl});
  border: solid 1px #777;
  border-radius: 6px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;
