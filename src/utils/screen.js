export const isMobile = () => {
  if (typeof window !== 'undefined' && window) { 
    return window.innerWidth <= 800;
  } else {
    return null;
  }
};

export const isDesktop = () => {
  if (typeof window !== 'undefined' && window) { 
    return window.innerWidth > 800;
  } else {
    return null;
  }
};
