import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header/page'
const poppins = Poppins({ subsets: ['latin'], weight: [
  '300',
  '500',
  '800'
] })

export const metadata = {
  title: 'Projeto Notícias',
  description: 'Bem vindo ao seu portal de notícias',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-blue-950 max-w-[1920px] m-auto`}>
        <Header/>
        {children}
        
        </body>
    </html>
  )
}
