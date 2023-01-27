import Image from "next/image";
import anujImg from "../assets/anujImg.png";
import {motion as m} from 'framer-motion'

const Intro = () => {
  return (
    <m.div 
      animate={{y:"0%"}}
      exit={{opacity:1}}
      initial={{y:"100%"}}
      transition={{duration:0.75, ease:'easeOut' }}
      className="bg-[#FD8A8A] w-full h-screen absolute top-0 ">
      <div className="max-w-7xl mx-auto relative h-full w-full">
        <div className="bg-[#DE6363] pl-12 flex absolute bottom-0 left-0 w-[80%] h-[550px]">
          <div className="relative w-full flex flex-col justify-evenly text-white">
            <div className="absolute md:top-[-10%] lg:top-[-18%] w-full overflow-hidden">
              <m.h2 
                animate={{ y: 0 }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.85 }}
                className="md:text-[80px] lg:text-[128px] font-bold tracking-wider">
                ANUJ SHAAN
              </m.h2>
            </div>
            <div className="overflow-hidden pt-8">
              <m.h2 
                animate={{ x: 0 }}
                initial={{ x: "100%" }}
                transition={{ delay: 1, duration: 2 }}
                className="text-[80px]">
                  I'm a Web Developer
                </m.h2>
            </div>
            <div className="overflow-hidden w-11/12">
              <m.p 
                animate={{ x: 0 }}
                initial={{ x: "-100%" }}
                transition={{ delay: 2.4, duration: 2 }}
                className="text-[30px] z-30  relative">Hi there, <br></br>
                  My name is Anuj Shaan. I have years of hardwork
                  in developing a fullstack website, as a result I have
                  strong knowledge in production level technolgies.
                  I can handle projects from design to deployment.</m.p>
            </div>
            <m.div 
              animate={{ y: 0 }}
              initial={{ y: "200%" }}
              transition={{ delay: 4, duration: 1.5 }}
              className="flex items-center space-x-8 ">
              <button className="text-[#FF3737] shadow-2xl font-bold text-xl bg-white p-4 rounded-lg px-12">About me</button>
              <button className="text-white shadow-2xl font-bold text-xl bg-[#FD8A8A] p-4 rounded-lg px-12">Contact me</button>
            </m.div>
          </div>
        </div>
        <div className=" absolute right-[-40px] bottom-0">
          <Image
            className="w-[500px] h-[700px]"
            src={anujImg}
            alt="Anuj Shaan"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Intro;
