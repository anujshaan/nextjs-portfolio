import type { NextPage } from 'next'
import Intro from './Intro'

const Home: NextPage = () => {
  
  return (
    <div className="flex flex-col items-center justify-center py-2">
       <Intro/>
    </div>
  )
}

export default Home
