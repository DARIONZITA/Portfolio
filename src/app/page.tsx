import Image from 'next/image'
import Imagens from '@/app/(utilites)/Imgs'
import gitIcon from '../../public/github.svg'
import linkedin from '../../public/linkedin.svg'
import { CopyEmail } from './(components)/CopyEmail'
import { About } from './(sections)/About'
import { Tecno } from './(sections)/Tecnologies'
import { Projects } from './(sections)/Projects'
import { Contact } from './(components)/contactme'
import CV from '../../public/CV.png'

export default function Home() { 
  return (
    <>
    <Contact/>
      <main id='home' className='p-5 m-5 items-center align-middle justify-center flex h-screen'>
      <section className='font-textTema text-8xl '>
        <h1 className='m-3 '>Hello,</h1> 
        <h1 className='m-3'>I'm Dário Nzita,</h1>
        <p className=' m-3 text-principal-500 rounded-md text- inline shadow-slate-100'>A full stack Developer.</p>
        <div >
          <small className='text-xl'>Contacts</small>
          <div className='flex w-3/4  justify-between mt-6'>
            <CopyEmail />
            <a href="https://github.com/DARIONZITA" target='_blank'>
            <Image
              className='transition-transform hover:-translate-y-3 duration-500'
              src={gitIcon}
              alt="github"
              width={40}
              height={40}
            />
            </a>
            <a href="https://www.linkedin.com/in/d%C3%A1rio-nzita-633728238/" target='_blank'>
            <Image
              className='transition-transform hover:-translate-y-3 duration-500'
              src={linkedin}
              alt="linkedin"
              width={50}
              height={50}
            />
            
            </a>
            <Image
              className='transition-transform hover:-translate-y-3 duration-500'
              src={CV}
              alt="CV"
              width={50}
              height={20}
            />
          </div>
        </div>
        
      </section>
      <section className='-z-10'>
        <Imagens />
      </section>
    </main>
    <About />
    <Tecno />
    <Projects />
    </>
    )
}
