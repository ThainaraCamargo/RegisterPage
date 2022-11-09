import type { AppProps } from 'next/app'
import { LayoutStyled } from '../styles/global'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <LayoutStyled/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

