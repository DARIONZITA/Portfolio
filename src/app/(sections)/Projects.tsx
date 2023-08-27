import Image from "next/image";
import CENTRO from "../../../public/centro.png"
import SHOP from "../../../public/shop.png"
import PORTFOLIO from "../../../public/portfolio.png"
import BUILD from "../../../public/build.png"
import Link from "next/link";

export function Projects(){
    return(
        <section id="project" className="text-justify bg-white flex flex-wrap p-9 justify-center">
            <div className="w-screen">
                <h1 className="border-l-4 border-principal-900 text-5xl m-2 font-textTema p-5">My Main Projects</h1>
            </div>
            <aside>
            <div className="card w-96 shadow-2xl bg-contrast-400 border-none text-white">
                    <figure className="bg-white w-full h-56  ">
                    <Image
                        className="w-full"
                        src={SHOP}
                        alt="shop logo"
                        width={300}
                        height={300}
                        />
                
                    </figure>
             
             
                
           
                <div className="card-body">
                    <h2 className="card-title">
                    Online Perfume store
                    <a href="https://shop-93nd.onrender.com/" target="_blank" className="badge badge-secondary">view</a>
                    
                    </h2>
                    
                    <p>An ecommerce store where users can register and order products.</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">MERN Stack</div> 
                    <div className="badge badge-outline">Tailwind</div>
                    <div className="badge badge-outline">Redux</div>
                      
                    <div className="badge badge-outline">UI/UX</div>
                    </div>
                </div>
                </div>
            </aside>

            <aside>
            <div className="card w-96 shadow-2xl bg-contrast-400 border-none text-white">
                    <figure className="bg-white w-full h-56 ">
                    <Image
                        className="w-full"
                        src={CENTRO}
                        alt="centro logo"
                        width={300}
                        height={300}
                        />
                
                    </figure>
             
             
                
           
                <div className="card-body">
                    <h2 className="card-title">
                    Medical Center
                    <a href={'https://centromedazes.000webhostapp.com/'} target="_blank" className="badge badge-secondary">View</a>
                    
                    </h2>
                    <p>A website where users can make appointments and learn about health and clinical information on the blog</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">FastApi</div> 
                    <div className="badge badge-outline">Html CSS and javascript</div>
                     
                    <div className="badge badge-outline">SEO</div>
                    </div>
                </div>
                </div>
            </aside>
            <aside>
            <div className="card w-96 shadow-2xl bg-contrast-400 border-none text-white">
                    <figure className="bg-white w-full h-56  ">
                    <Image
                        className="w-full"
                        src={PORTFOLIO}
                        alt="portfolio logo"
                        width={300}
                        height={300}
                        />
                
                    </figure>
             
             
                
           
                <div className="card-body">
                    <h2 className="card-title">
                    Portfolio
                    <Link href={'#home'} className="badge badge-secondary">View</Link>
                    </h2>
                    <p>Where can I store my information and skills</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Next.JS</div> 
                    <div className="badge badge-outline">TypeScript</div>
                    <div className="badge badge-outline">Tailwind</div>
                    <div className="badge badge-outline">UI/UX</div>
                    </div>
                </div>
                </div>
            </aside>
            <aside>
            <div className="card w-96 shadow-2xl bg-contrast-400 border-none text-white">
                    <figure className="bg-white w-full h-56  ">
                    <Image
                        className="w-full"
                        src={BUILD}
                        alt="teste logo"
                        width={300}
                        height={300}
                        />
                
                    </figure>
             
             
                
           
                <div className="card-body">
                    <h2 className="card-title">
                    Construction

                    <a href="https://darionzita.github.io/casa-lar/" target="_blank" className="badge badge-secondary">View</a>
                    </h2>
                    <p>(Study project) Home construction and renovation company</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Html css and javascript</div> 
                    </div>
                </div>
                </div>
            </aside>
            
            
        </section>
        
    )
}