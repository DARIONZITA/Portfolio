import Image from "next/image"
import MERN from '../../../public/MERN-logo.png'
import NEXT from '../../../public/next.svg'
import REACT from '../../../public/react-1-logo-png-transparent.png'
import TAILWIND from '../../../public/tailwindcss_logo_icon_170649.png'
import TYPESCRIPT from '../../../public/typescript.png'
import REDUX from '../../../public/Redux_Logo.png'
import UIUX from '../../../public/UI-UX-Design.png'
import SASS from '../../../public/sass-1-logo-png-transparent.png'
import EXPRESS from '../../../public/baixados.png'
import MONGODB from '../../../public/MongoDB_Logo.svg.png'
import MYSQL from '../../../public/png-transparent-mysql-php-database-javascript-ajax-carnifex-blue-text-logo.png'
import FASTAPI from '../../../public/logo-teal.png'
import JS from '../../../public/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png'
import GIT from '../../../public/github.svg'
import SEO from '../../../public/istockphoto-997463524-612x612.jpg'
function Tecno(){
    return(
        <section id="skill" className='w-screen text-sm font-hello  from-slate-400 bg-gradient-to-b pb-40 from-90% p-0  h-fit  grid align-middle shadow-inner'>
            <div>
            <h1 className="border-l-4 border-white md:ml-9 text-xl sm:text-5xl m-2 font-textTema text-white p-5">My Skills</h1>
            
            </div>
            <aside>
                <h2 className="text-white m-10 text-base text-center sm:text-xl">Full Stack Technologies</h2>
                <div className="w-screen flex-wrap flex justify-center">
    
                        <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">MERN Stack</h2>
                                <Image
                                    src={MERN}
                                    alt="mern logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>The MERN stack is a web development framework that combines MongoDB, Express.js, React,
                                 and Node.js.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                   
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">Next.js</h2>
                                <Image
                                    src={NEXT}
                                    alt="next logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>Next.js is a popular React framework that simplifies the 
                                development of server-rendered React applications.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                    
                </div>
            </aside>
            <aside className="w-screen">
                <h2 className="text-white m-10 text-base text-center sm:text-xl">Front End Technologies</h2>
                <div className="w-full flex flex-wrap justify-center">
    
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between ">
                                <h2 className="card-title">React.JS</h2>
                                <Image
                                    src={REACT}
                                    alt="react logo"
                                    width={50}
                                    height={50}
                                    />
                            </div>
                      
                            <p>React is a JavaScript library used for building user interfaces.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                   
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">Tailwind css</h2>
                                <Image
                                    src={TAILWIND}
                                    alt="tailwind logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>Tailwind CSS is a utility-first CSS framework that 
                                streamlines web development by providing a set of pre-designed classes.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">UI/UX concepts</h2>
                                <Image
                                    src={UIUX}
                                    alt="ui / ux logo"
                                    width={50}
                                    height={50}
                                    />
                            </div>
                      
                            <p>UI/UX  
                                refers to the design and interaction elements of a digital product. 
                                </p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">TypeScript</h2>
                                <Image
                                    src={TYPESCRIPT}
                                    alt="typescript logo"
                                    width={50}
                                    height={50}
                                    />
                            </div>
                      
                            <p>TypeScript is a superset of JavaScript that introduces static typing and enhanced tooling to the language.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">Redux ToolKit</h2>
                                <Image
                                    src={REDUX}
                                    alt="redux logo"
                                    width={70}
                                    height={70}
                                    />
                            </div>
                      
                            <p>Redux is a state management library for JavaScript applications, commonly used with React.
                                 </p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">Sass</h2>
                                <Image
                                    src={SASS}
                                    alt="SASS"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>Sass is a preprocessor scripting language that enhances the capabilities of CSS by adding variables,
                                 nested rules, mixins, and others.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                    
                    
                </div>
            </aside>
            <aside className="w-screen">
                <h2 className="text-white m-10 text-base sm:text-xl text-center">Back End Technologies and Data bases</h2>
                <div className="w-full flex flex-wrap justify-center">
    
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between ">
                                <h2 className="card-title">Express.JS</h2>
                                <Image
                                    src={EXPRESS}
                                    alt="express logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>Express.js is a minimal and flexible web application framework for Node.js.
                                 </p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                   
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">MongoDb</h2>
                                <Image
                                    src={MONGODB}
                                    alt="mongodb logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>MongoDB is a popular NoSQL database that uses a document-oriented
                                 model to store and manage data.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">FastApi</h2>
                                <Image
                                    src={FASTAPI}
                                    alt="fastapi logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>Python web framework for high-performance APIs with automatic docs and type hints. </p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">MySql</h2>
                                <Image
                                    src={MYSQL}
                                    alt="mysql logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <p>MySQL is an open-source relational database management system known for its speed,
                                 reliability, and wide adoption in web application.</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                    
                </div>
            </aside>
            <aside className="w-screen">
                <h2 className="text-white m-10 text-base sm:text-xl text-center">Basic knowledge</h2>
                <div className="w-full flex-wrap flex justify-center">
    
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">HTML CSS and JS</h2>
                                <Image
                                    src={JS}
                                    alt="3basic logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                   
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">Git/gitHub</h2>
                                <Image
                                    src={GIT}
                                    alt="git logo"
                                    width={50}
                                    height={50}
                                    />
                            </div>
                      <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">  
                            <div className="flex justify-between">
                                <h2 className="card-title">SEO</h2>
                                <Image
                                    src={SEO}
                                    alt="SEO logo"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                      
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        </div>
                        
                    
                    
                </div>
            </aside>
        </section>
    )
}
export {Tecno}