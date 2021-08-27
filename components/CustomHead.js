import Head from 'next/head';

export default function CustomHead({ title, path }) {
  return (
    <Head>
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />

      <meta name='url' content={`https://fazeelanizam13.github.io/blog/${path}`} />
      <meta name='description' content="Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!" />

      <meta name='og-title' property='og:title' content={`${title} - Blog | Fazeela Nizam`} />
      <meta name='og-url' property='og:url' content={`https://fazeelanizam13.github.io/blog/${path}`} />
      <meta name='og-description' property='og:description' content="Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!" />
      <meta property='og:image' content={`${process.env.URL}/favicon-icons/android-chrome-192x192.png`} />

      <link rel='apple-touch-icon' sizes='180x180' href={`${process.env.URL}/favicon-icons/apple-touch-icon.png`} />
      <link rel='icon' type='image/png' sizes='32x32' href={`${process.env.URL}/favicon-icons/favicon-32x32.png`} />
      <link rel='icon' type='image/png' sizes='16x16' href={`${process.env.URL}/favicon-icons/favicon-16x16.png`} />

      <title>{`${title} - Blog | Fazeela Nizam`}</title>
    </Head>
  )
}
