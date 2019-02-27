// [ 00, 01, 02, 03, 04, 05, 06, 07, 08 ]
// [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

const SMALL = '800px';
const MEDIUM = '1040px';
const LARGE = '1280px';
export const breakpoints = {
  SMALL,
  MEDIUM,
  LARGE,
};
export const breakpointArray = [SMALL, MEDIUM, LARGE];

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
