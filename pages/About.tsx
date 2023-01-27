import {motion as m} from 'framer-motion'
import Image from "next/image";
import davImg from '../assets/dav.png'
import oxfordImg from '../assets/oxford.png'
import bitImg from '../assets/bit mesra.png'
import nitImg from '../assets/nit raipur 1.png'
import pinchforthImg from '../assets/pinchforth 1.png'
import myDashImg from '../assets/mydash 1.png'


const About = () => {
  return (
    <m.div
      animate={{y:"0%"}}
      exit={{opacity:1}}
      initial={{y:"100%"}}
      transition={{duration:0.75 , ease:"easeInOut"}}
      className="bg-[#5686E5] w-full h-screen absolute top-0"
    >
      <div className="max-w-7xl mx-auto mt-24 text-white h-full w-full">
        <div className="w-">
          <h2 className="text-[40px] font-bold">
            When I first created account on Facebook I was amazed.<br></br> How it is
            working? Can I make it?<br></br> “That curiosity that day laid the path of
            what I am today”
          </h2>
        </div>
        <div>
          <h3 className="text-[42px] font-black">Education:</h3>
          <div className="flex items-center justify-end space-x-36 mr-8">
            <div className="w-[150px] h-[140px]">
              <Image src={davImg} alt="mkdav" className="w-full h-full" />
            </div>
            <div className="w-[143px] h-[146px]">
              <Image src={oxfordImg} alt="oxford ranchi" className="w-full h-full" />
            </div>
            <div className="w-[147px] h-[142px]">
              <Image src={bitImg} alt="bit mesra" className="w-full h-full" />
            </div>
            <div className="w-[145px] h-[145px]">
              <Image src={nitImg} alt="nit raipur" className="w-full h-full"/>
            </div>
          </div>
          <div className="">
            <h3 className="text-[42px] font-black">Experience:</h3>
            <div className="flex items-center justify-center space-x-36">
              <div className="w-[248px] h-[144px]">
                <Image src={myDashImg} alt="mydash" className="h-full w-full" />
              </div>
              <div className="w-[278px] h-[90px]">
                <Image src={pinchforthImg} alt="pinchforth" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
