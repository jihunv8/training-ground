import styled, { css } from 'styled-components';

import { colors } from '@/app/styled-components/construction/_styles/theme/colors';

const CommonButton = styled.button<{ $inversion?: boolean }>`
  background-color: ${({ $inversion }) => ($inversion ? colors.blue : 'rgba(0, 0, 0, 0)')};
  min-width: 214px;
  min-height: 64px;
  border: solid 1px #40a2d5;
  border-radius: 40px 5px 40px 5px;

  color: ${({ $inversion }) => ($inversion ? '#ffffff' : colors.blue)};
  font-size: 1.0625rem;
  line-height: 1.25rem;
  letter-spacing: -0.03125rem;

  ${({ $inversion }) =>
    $inversion &&
    css`
      box-shadow:
        0 65px 47px rgba(64, 162, 213, 0.0759),
        0 39px 26px rgba(64, 162, 213, 0.06),
        0 20px 13px rgba(64, 162, 213, 0.05),
        0 8px 7px rgba(64, 162, 213, 0.04),
        0 2px 3px rgba(64, 162, 213, 0.025);
    `}
`;

export default CommonButton;
