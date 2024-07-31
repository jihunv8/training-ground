import { screenSize } from '@/app/styled-components/korean-air/_styles/mediaSize';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsiveCheck = (screen: 'xlarge' | 'large' | 'middle' | 'small' | 'xsmall') => {
  const [screenSizeTable, setScreenSizeTable] = useState({
    xlarge: false,
    large: false,
    middle: false,
    small: false,
    xsmall: false,
  });

  const xlarge = useMediaQuery({ maxWidth: screenSize.xLarge });
  const large = useMediaQuery({ maxWidth: screenSize.large });
  const middle = useMediaQuery({ maxWidth: screenSize.middle });
  const small = useMediaQuery({ maxWidth: screenSize.small });
  const xsmall = useMediaQuery({ maxWidth: screenSize.xSmall });

  useEffect(() => {
    setScreenSizeTable({ xlarge, large, middle, small, xsmall });
  }, [xlarge, large, middle, small, xsmall]);
  return screenSizeTable[screen];
};
