import { FC } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const SEO: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>Thullo - {title}</title>
      <meta
        name="description"
        content="With our platform, you can organize your tasks and projects in a visual and collaborative way. Create boards for different projects and add cards detailing specific tasks. Assign tasks to members of your team and follow the progress in real time. Plus, you can add tags and blackout dates to keep you focused and on track. Try our platform for free today and experience the efficiency of Trello organization!"
      />
      <meta property="og:title" content="Add a Shopping Cart to Any Website in Minutes - Snipcart" />
      <meta
        property="og:description"
        content="With our platform, you can organize your tasks and projects in a visual and collaborative way. Create boards for different projects and add cards detailing specific tasks. Assign tasks to members of your team and follow the progress in real time. Plus, you can add tags and blackout dates to keep you focused and on track. Try our platform for free today and experience the efficiency of Trello organization!"
      />
      <meta property="og:url" content="https://faketrello.vercel.app/" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEO;
