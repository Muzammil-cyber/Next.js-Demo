import MainLayout from '@/src/components/main-layout'
import '@/styles/globals.css'
import '@/styles/Home.sass'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
