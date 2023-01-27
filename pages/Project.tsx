import {motion as m} from 'framer-motion'

import  ProjectCard  from "../components/ProjectCard"
import ProjectData from '../projectData.json'



const Project = () => {
  return (
    <m.div
      animate={{y:"0%"}}
      exit={{opacity:1}}
      initial={{y:"100%"}}
      transition={{duration:0.75 , ease:"easeInOut"}}
     className="bg-[#a3a3da] h-screen w-full absolute top-0">
     <div  className="max-w-6xl mx-auto space-x-16 h-[86vh] flex justify-center">
        {
          ProjectData.map((data)=>(
            <ProjectCard key={data.id}  data={data} />
          ))
        }
     </div>
        {/* <button className="absolute bottom-8 left-[50%] translate-x-[-50%] ">Show more</button> */}
    
    </m.div>
  )
}

export default Project