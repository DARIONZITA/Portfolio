'use client'

import Image from "next/image";
import { CopyEmail } from "./CopyEmail";
import gitIcon from '../../../public/github.svg'
import linkedin from '../../../public/linkedin.svg'
import CV from '../../../public/CV.png'

declare const window: any;

export function Contact(){
    return (
        <>
         {/* Open the modal using ID.showModal() method */}
         <dialog id="my_modal_5" className="overflow-x-hidden modal modal-bottom sm:modal-middle">
            <form method="dialog" className="overflow-x-hidden modal-box grid justify-center">
              <h3 className="font-bold text-2xl text-center p-5">Contacts</h3>
              <CopyEmail />
              <div className="p-4 flex justify-around">
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
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        <button className=" fixed z-50  contact right-10 top-4 sm:top-2 px-6 py-3 font-bol group" onClick={()=>window.my_modal_5.showModal()}>
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 -translate-y-1 bg-contrast-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-gray-500"></span>
          <span className="relative text-slate-950 font-medium">Contact Me</span>
        </button>
 
        </>
            )
}