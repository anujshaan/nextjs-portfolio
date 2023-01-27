import {motion as m} from 'framer-motion'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import skype from '../assets/skype.png'
import Image from 'next/image'

const Socials = () => {
  return (
    <m.div 
    animate={{y:"0%"}}
    exit={{opacity:1}}
    initial={{y:"100%"}}
    transition={{duration:0.75 , ease:"easeInOut"}}
    className="bg-gray-900 w-full h-screen absolute top-0">
      <div className="max-w-7xl h-full mx-auto mt-24">
          <div className="text-white space-y-8">
            <h2 className="text-[64px] underline font-extrabold">Thanks for visiting my profile.</h2>
            <h2 className="text-[50px] underline font-extrabold">If you've no work for me currently, that's ok</h2>
            <h2 className="text-[64px] underline font-extrabold">Let's connect for future references.</h2>
          </div>
          <div className='flex items-center justify-center space-x-24 mt-10'>
            <a href="/" className='h-[140px]'>
              <Image src={twitter} alt="twitter logo" className="h-full w-full"/>
            </a>
            <a href="/" className='h-[140px]'>
              <Image src={gmail} alt="gmail logo" className="h-full w-full"/>
            </a>
            <a href="/" className='h-[140px]'>
              <Image src={linkedin} alt="linkedin logo" className="h-full w-full"/>
            </a>
            <a href="/" className='h-[140px]'>
              <Image src={github} alt="github logo" className="h-full w-full"/>
            </a>
            <a href="/" className='h-[140px]'>
              <Image src={skype} alt="skype logo" className="h-full w-full"/>
            </a>
          </div>
      </div>
    </m.div>
  )
}

export default Socials