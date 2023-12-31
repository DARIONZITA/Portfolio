import './globals.css'
import type { Metadata } from 'next'
import {fontTextII,fontTextI,fontTema,fontHello,inter} from '@/app/(utilites)/fonts'
import Link from 'next/link'
import MENU from '../../public/menu.png'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Dario Nzita',
  description: 'Portfolio'}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fontHello.variable} ${fontTextII.variable} ${fontTextI.variable} ${fontTema.variable}`}>
        <header className='fixed z-50 w-screen shadow-md p-1 top-0 backdrop-blur-md'>
          <nav className=' sm:hidden h-14'>
          <details className="dropdown mb-32">
            <summary className="m-1 btn mt-2"><Image alt='menu' src={MENU} width={40} height={40}/></summary>
            
            <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-left flex justify-start align-middle flex-col'>
              <li><Link href={'#home'} className={'justify-start btn text-2xl text-left'}>Home</Link></li>
              <li><Link href={'#about'} className='btn text-left justify-start'>About me</Link></li>
              <li><Link href={'#skill'} className='btn text-left justify-start'>Skills</Link></li>
              <li><Link href={'#project'} className='btn text-left justify-start'>Projects</Link></li>
            </ul>
          </details>
          </nav>
          <nav className={'hidden sm:justify-start sm:flex md:justify-center'}>
            <ul className='flex w-fit align-middle sm:justify-start'>
              <li><Link href={'#home'} className={'tu btn text-2xl'}>Home</Link></li>
              <li><Link href={'#about'} className='btn'>About me</Link></li>
              <li><Link href={'#skill'} className='btn'>Skills</Link></li>
              <li><Link href={'#project'} className='btn'>Projects</Link></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className='bg-gray-500 text-white text-sm md:text-lg p-2 bottom-0 flex justify-center'>
          <p>Copyright © 2023. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
