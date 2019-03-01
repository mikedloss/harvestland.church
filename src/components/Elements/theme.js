//    0   1   2   3   4   5   6   7   8
// [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

const SMALL = 800;
const MEDIUM = 1040;
const LARGE = 1280;
export const breakpointValues = {
  SMALL,
  MEDIUM,
  LARGE,
};
export const breakpoints = [`${SMALL}px`, `${MEDIUM}px`, `${LARGE}px`];

export const colors = {
  primary: '#42613d',
  black: '#222',
  white: '#fff',
  realBlack: '#000',
};

export default {
  colors,
  fontSizes,
  breakpoints,
};
