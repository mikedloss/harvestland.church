import { ChildImageSharp } from '../types';

export const getFluidImageSrc = (data: ChildImageSharp) => {
  return data.childImageSharp.fluid.src;
};
