import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApiProvider } from '../src/context/ApiContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  </div>
  )
}

export default MyApp
