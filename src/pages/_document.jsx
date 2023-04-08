import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps
  let dm = () => (
    <script>
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in
      localStorage) && window.matchMedia('(prefers-color-scheme:
      dark)').matches)) {document.documentElement.classList.add('dark')} else{' '}
      {document.documentElement.classList.remove('dark')}
    </script>
  )

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01'] dark:bg-slate-800"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <dm />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
