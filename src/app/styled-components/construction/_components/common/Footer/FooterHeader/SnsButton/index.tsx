import styled from 'styled-components';

function SnsButton({ href = '', iconUrl = '', iconAlt = '' }) {
  return (
    <SNSButtonWrapper href={href}>
      <img src={iconUrl} alt={iconAlt} />
    </SNSButtonWrapper>
  );
}

export default SnsButton;

const SNSButtonWrapper = styled.a`
  max-width: 29px;
  max-height: 29px;
`;
