import { motion as m } from "framer-motion";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills: string[] = [
    "html",
    "css",
    "js",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "shopify",
    "sanity",
    "mongo",
  ];
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="bg-[#9fc0af] w-full h-screen absolute top-0"
    >
      <div className="max-w-7xl h-full mx-auto grid place-content-center grid-cols-5 grid-flow-row gap-4 gap-y-20">
        {
          skills.map(skill=>(
            <SkillCard skill={skill}/>
          ))
        }
      </div>
    </m.div>
  );
};

export default Skills;
