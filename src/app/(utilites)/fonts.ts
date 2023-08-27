import { Inter, Roboto_Mono,Montserrat,Nanum_Myeongjo,Abril_Fatface} from 'next/font/google'

const fontTextII = Roboto_Mono({variable: '--fontTextII', subsets: ['latin'] })
const fontTextI= Montserrat({variable: '--fontTextI', subsets: ['latin'] })
const fontTema= Nanum_Myeongjo({variable: '--fontTema',weight : ['400','700','800'],subsets : ['latin']})
const fontHello = Abril_Fatface({variable: '--fontHello',weight : '400',subsets : ['latin']})
const inter = Inter({variable: '--fontInter', subsets: ['latin'] })

export {fontTextII,fontTextI,fontTema,fontHello,inter}