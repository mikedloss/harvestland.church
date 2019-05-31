//                        0   1   2   3   4   5   6   7   8
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
  primaryLight: '#79a672',
  primaryLighter: '#b5ceb1',
  black: '#22292F',
  white: '#fff',
  realBlack: '#000',
  offWhite: '#f8fafc',
};

//                    0  1  2  3   4   5   6   7   8   9   10
export const space = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

export const buttons = {
  default: {
    backgroundColor: colors.primary,
    color: colors.white,
    border: `3px solid ${colors.primary}`,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#547050',
      borderColor: '#547050',
    },
  },
  inverse: {
    backgroundColor: colors.white,
    color: colors.primary,
    border: `3px solid ${colors.primary}`,
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      cursor: 'pointer',
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
  },
};

export default {
  breakpoints,
  buttons,
  colors,
  fontSizes,
  space,
};
