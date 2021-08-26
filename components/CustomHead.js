import Head from 'next/head';

export default function CustomHead({ title, path }) {
  return (
    <Head>
      <link
        rel='preload'
        href='/fonts/Cabin/static/Cabin-Bold.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/SignikaNegative/SignikaNegative-Regular.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/SignikaNegative/SignikaNegative-Bold.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/OxygenMono/OxygenMono-Regular.ttf'
        as='font'
        crossOrigin=''
      />

      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />

      <meta name='url' content={`https://blog.fazeelanizam.com${path}`} />
      <meta name='description' content="Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!" />

      <meta name='og-title' property='og:title' content={`${title} - Blog | Fazeela Nizam`} />
      <meta name='og-url' property='og:url' content={`https://blog.fazeelanizam.com/${path}`} />
      <meta name='og-description' property='og:description' content="Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!" />
      <meta property='og:image' content='favicon-icons/android-chrome-192x192.png' />

      <link rel='apple-touch-icon' sizes='180x180' href='favicon-icons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon-icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon-icons/favicon-16x16.png' />

      <title>{`${title} - Blog | Fazeela Nizam`}</title>
    </Head>
  )
}
