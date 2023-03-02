import NextNProgress from 'nextjs-progressbar';

const NextProgress = () => {
  return <NextNProgress showOnShallow={false} color="var(--chakra-colors-blue-1)" height={2} startPosition={0.4} options={{ easing: 'ease', speed: 500 }} />;
};

export default NextProgress;
