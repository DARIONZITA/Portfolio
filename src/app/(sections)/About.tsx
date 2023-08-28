import Image from "next/image";
import g1 from "../../../public/g3.svg"
export function About(){
    return (
        <section id="about" className="w-screen flex flex-wrap  animate-fade animate-once animate-ease-in min-h-screen bg-slate-200 shadow-inner justify-start sm:justify-center pl-6 items-center sm:p-5 ">
            
            <aside >
                <Image
    
                src={g1}
                alt="image about"

              
                />
            </aside>
            <aside className="animate-fade-left animate-once animate-ease-in md:w-2/3 border-t-8 md:border-l-8 sm:pl-4 border-principal-900 border-solid text-base md:text-2xl m-2 font-normal text-justify indent-3 md:border-t-0  w-[85%]">
            <h1 className="text-5xl m-2 font-textTema indent-0">About Me</h1>

            <p >My name is Dário Nzita and I&apos;m a full stack 
                developer with <span className="text-contrast-500"> over a year of experience</span>.
                At the moment I work as a freelancer having worked mainly 
                with <span className="text-contrast-500">MERN Stack</span> and <span className="text-contrast-500" >Next.js</span> technologies.</p>
            <p >My journey into the
                     world of code began when I realized the incredible
                      potential it holds to shape the way we interact with technology.
            </p>
            <p>
            Feel free to reach out, and let&apos;s discuss how we can turn lines of code into opportunities waiting to be unleashed. 
            Together, we&apos;ll build digital experiences that leave a mark.
            </p>
    
            </aside>
            
        </section>
        
    )
}
