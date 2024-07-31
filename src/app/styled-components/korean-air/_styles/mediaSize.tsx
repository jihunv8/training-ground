export const maxContentsArea = '1280px';

export const screenSize = {
  xLarge: 1440,
  large: 1060,
  middle: 900,
  small: 640,
  xSmall: 360,
} as const;

export const screenXLarge = `${screenSize.xLarge}px`;
export const screenLarge = `${screenSize.large}px`;
export const screenMiddle = `${screenSize.middle}px`;
export const screenSmall = `${screenSize.small}px`;
export const screenXSmall = `${screenSize.xSmall}px`;

export const maxWidthXLarge = `screen and (max-width: ${screenXLarge})`;
export const maxWidthLarge = `screen and (max-width: ${screenLarge})`;
export const maxWidthMiddle = `screen and (max-width: ${screenMiddle})`;
export const maxWidthSmall = `screen and (max-width: ${screenSmall})`;
export const maxWidthXSmall = `screen and (max-width: ${screenXSmall})`;
