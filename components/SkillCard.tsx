import Image from 'next/image'
import {motion as m} from 'framer-motion'

type props={
  skill:string;
}

const SkillCard = ({skill}:props) => {
  return (
    <div>
      <div className={`skill-circle w-[160px] h-[160px] rounded-full `}>
        <div className='h-[120px] relative w-full flex items-center justify-center'>
          <Image
          src={require(`../assets/${skill}.png`)}
          alt="name"
          className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default SkillCard