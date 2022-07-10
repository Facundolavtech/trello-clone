import Head from "next/head";

interface ISEO {
  title?: string;
}

const SEO = ({ title }: ISEO) => {
  return (
    <Head>
      <title>{title || "Awesome fake trello by @Flavtech"}</title>
      <meta
        name="description"
        content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
      />
      <meta
        property="og:title"
        content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
      />
      <meta
        property="og:description"
        content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
      />
      <meta property="og:url" content="https://faketrello.vercel.app/" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEO;
