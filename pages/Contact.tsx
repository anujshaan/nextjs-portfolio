import { motion as m} from 'framer-motion'

const Contact = () => {
  return (
    <m.div 
      animate={{y:"0%"}}
      exit={{opacity:1}}
      initial={{y:"100%"}}
      transition={{duration:0.75 , ease:"easeInOut"}}
      className="bg-[#b8cc97] w-full h-screen absolute top-0">
      <div className="bg-[#9BAF79] max-w-7xl h-4/5 rounded-xl mx-auto mt-24 flex">
        <div className="h-full flex-1 text-white flex flex-col ml-8 justify-evenly">
          <div>
            <h2 className="text-[50px] font-bold">Do You Like My Profile!</h2>
            <h3 className="text-[36px] font-semibold">Let's work together...</h3>
          </div>
          <div>
            <h2 className="text-[50px] font-bold">Any Suggestions!</h2>
            <h3 className="text-[36px] font-semibold">Write a message...</h3>
          </div>
        </div>
        <div className="h-full flex items-center justify-center flex-1 bg-white rounded-tr-xl rounded-br-xl">
          <form className="flex flex-col h-4/5 w-11/12 p-4 space-y-4">
            <div>
              <h2 className="text-[32px] text-[#9BAF79] text-center">Get In Touch</h2>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex-1 space-y-2">
                <label htmlFor="firstname" className="text-gray-600">Firstname:</label>
                <input className="h-[50px] w-full border border-gray-300 rounded-md p-2 outline-none" type="text" id="firstname"/>
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="lastname" className="text-gray-600">Lastname:</label>
                <input className="h-[50px] w-full border border-gray-300 rounded-md p-2 outline-none" type="text" id="lastname"/>
              </div>
            </div>
            <div className="flex items-center space-x-8 ">
              <div className="flex-1 space-y-2">
                <label htmlFor="email" className="text-gray-600">Email:</label>
                <input className="h-[50px] w-full border border-gray-300 rounded-md p-2 outline-none" type="text" id="email"/>
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="phone" className="text-gray-600">Phone:</label>
                <input className="h-[50px] w-full border border-gray-300 rounded-md p-2 outline-none" type="text" id="phone"/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-gray-600">Message</label>
              <textarea className="h-[100px] border border-gray-300 rounded-md p-2 outline-none"  id="message"></textarea>
            </div>
            <button className="p-4 bg-[#9BAF79] w-48 mx-auto mt-8 rounded-lg text-white font-bold hover:bg-[#708153]">Send</button>
          </form>
        </div>
      </div>
    </m.div>
  )
}

export default Contact