import Image from "next/image";
import { ArrowRightIcon, LinkIcon } from "@heroicons/react/24/solid";

type Iprops = {
  data: IData;
};

type IData = {
  id: number;
  name: string;
  img: string;
  color: string;
  details: string;
  tech: ITech[];
};

type ITech = {
  title: string;
  logo: string;
  details: string;
};

const ProjectCard = ({ data }: Iprops) => {
  return (
    <div className="mt-20 w-full p-2 bg-white rounded-lg">
      <div className="flex h-full">
        {/* left side  */}
        <div className="flex-1 overflow-auto scrollbar-hide">
          {
            data.tech.map((data, index)=>(
              <div key={index} className=" flex space-y-6 py-2 space-x-3 items-center">
                <div className="w-14 h-12">
                  <Image src={require(`../assets/${data.logo}.png`)} alt="" className=" " />
                </div>
                <div>
                  <div>
                    <h4 className={`font-bold text-lg`}>{data.title}</h4>
                  </div>
                  <p className="line-clamp-3 w-48">
                    {data.details}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

        {/* rightside */}
        <div
          className={`relative flex-1 border shadow-lg text-white rounded-lg ${data.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`}
        >
          <div className="h-2/6 flex items-center justify-center border-b">
            <Image
              src={require(`../assets/${data.img}.png`)}
              alt="project img"
              className="rounded-tl-lg rounded-tr-lg object-cover w-full h-full"
            />
          </div>
          <div className="m-2 my-4 ">
            <h3 className="font-extrabold">{data.name}</h3>
            <p className="">{data.details}</p>
          </div>
          <div className="absolute bottom-4 w-full flex justify-evenly z-10 text-white">
            <a
              href="/"
              className={`bg-[${data.color}] border p-2 px-4 border-[${data.color}] flex items-center rounded-lg opacity-15 shadow-xl`}
            >
              <small className="font-semibold">Details</small>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://anujshaanblog.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="border flex items-center border-[#ffffff]  text-[#ffffff] font-semibold p-2 px-4 rounded-lg"
            >
              <small className="font-semibold">Visit</small>
              <LinkIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
