const contentsArea = {
  xLarge: '1170px',
  large: '970px',
  middle: '720px',
  small: '540px',
  xSmall: '320px',
};

export const contentsAreaXLarge = contentsArea.xLarge;
export const contentsAreaLarge = contentsArea.large;
export const contentsAreaMiddle = contentsArea.middle;
export const contentsAreaSmall = contentsArea.small;
export const contentsAreaXSmall = contentsArea.xSmall;

export const screenSize = {
  large: 1440,
  middle: 1200,
  small: 840,
  xSmall: 640,
} as const;

export const screenLarge = `${screenSize.large}px`;
export const screenMiddle = `${screenSize.middle}px`;
export const screenSmall = `${screenSize.small}px`;
export const screenXSmall = `${screenSize.xSmall}px`;
