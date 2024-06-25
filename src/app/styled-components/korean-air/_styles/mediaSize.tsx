export const maxContentsArea = '1280px';

const screenSize = {
  xLarge: '1440px',
  large: '1060px',
  middle: '900px',
  small: '640px',
  xSmall: '360px',
};

export const screenLarge = screenSize.large;
export const screenMiddle = screenSize.middle;
export const screenSmall = screenSize.small;
export const screenXSmall = screenSize.xSmall;

export const maxWidthXLarge = `screen and (max-width: ${screenSize.xLarge})`;
export const maxWidthLarge = `screen and (max-width: ${screenSize.large})`;
export const maxWidthMiddle = `screen and (max-width: ${screenSize.middle})`;
export const maxWidthSmall = `screen and (max-width: ${screenSize.small})`;
export const maxWidthXSmall = `screen and (max-width: ${screenSize.xSmall})`;
