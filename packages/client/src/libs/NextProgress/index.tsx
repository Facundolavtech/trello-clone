import NextNProgress from 'nextjs-progressbar';

const NextProgress = () => {
  return <NextNProgress color="#2F80ED" height={2} startPosition={0.4} options={{ easing: 'ease', speed: 500 }} />;
};

export default NextProgress;
