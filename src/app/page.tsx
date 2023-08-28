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
      <main id='home' className='min-h-[90vh] sm:p-8 sm:m-5 p-3   sm:items-center sm:align-middle md:flex '>
      <section className={` md:absolute md:w-1/2 top-20 pt-6 sm:pt-0 right-2 -z-10`}>
        <Imagens />
      </section>
      <section className='font-textTema text-2xl md:text-5xl'>
        <h1 className='m-3 '>Hello,</h1> 
        <h1 className='m-3'>I&apos;m Dário Nzita,</h1>
        <p className=' m-3 text-principal-500 rounded-md text- inline shadow-slate-100'>A full stack Developer.</p>
        <div >
          <small className='sm:text-xl text-base'>Contacts</small>
          <div className='flex flex-wrap justify-between sm:mt-6 mt-3'>
            <CopyEmail />
            <div className='flex justify-between w-52 px-4'>
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
              className='max-h-[50px] transition-transform hover:-translate-y-3 duration-500'
              src={CV}
              alt="CV"
              width={50}
              height={10}
            />
            </div>
            
          </div>
        </div>
        
      </section>
    </main>
    <About />
    <Tecno />
    <Projects />
    </>
    )
}
