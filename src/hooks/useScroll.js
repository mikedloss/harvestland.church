export default () => {
  const [scrollPos, setScrollPos] = useState();

  const handleScroll = () => setScrollPos(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
