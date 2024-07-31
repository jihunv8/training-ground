import { screenSize } from '@/app/styled-components/construction/_styles/theme/mediaSize';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsiveCheck = (screen: 'large' | 'middle' | 'small' | 'xsmall') => {
  const [screenSizeTable, setScreenSizeTable] = useState({
    large: false,
    middle: false,
    small: false,
    xsmall: false,
  });

  const large = useMediaQuery({ maxWidth: screenSize.large });
  const middle = useMediaQuery({ maxWidth: screenSize.middle });
  const small = useMediaQuery({ maxWidth: screenSize.small });
  const xsmall = useMediaQuery({ maxWidth: screenSize.xSmall });

  useEffect(() => {
    setScreenSizeTable({ large, middle, small, xsmall });
  }, [large, middle, small, xsmall]);
  return screenSizeTable[screen];
};
