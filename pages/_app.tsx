import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layouts/MainLayout'
import { AuthProvider } from '@/hooks/AuthContext'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ MainLayout>
  )
}
