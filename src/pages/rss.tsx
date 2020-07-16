export default () => {
  if (typeof window !== 'undefined' && window) {
    window.location = 'https://harvestlandchurch.netlify.com/rss.xml';
  }

  return null;
};
