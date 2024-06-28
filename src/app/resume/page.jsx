"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  tittle: "About me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites and applications",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shriyansh kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 935 186 40 35",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "Shriyansh7870@gmail.com",
    },
    {
      fieldName: "Developer",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Hindi",
    },
  ],
};

const eperience = {
  icon: "",
  tittle: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
  items: [
    {
      company: "Aict Pvt LTD",
      positon: "junior React developer Intern",
      duration: "2023 - (6 months)",
    },
    {
      company: "Umenit Solution",
      positon: "junior React developer",
      duration: "2023- present",
    },
  ],
};

const education = {
  icon: "",
  tittle: "My education",
  description:
    "I have pursued a passion for technology and web development, completing a Full Stack Web Development program at PrepByte Academy. Additionally, I earned a Bachelor's Degree in Information Technology from Bengal College of Engineering and Technology. These experiences equipped me with expertise in modern web technologies and a strong foundation in software development and information systems",
  items: [
    {
      institution: "PrepByte Acedamy",
      degree: "Full Stack web Development",
      duration: "2022-2023 (6 months)",
    },
    {
      institution: "Bengal College of Enginerring and Technology",
      degree: "Bachelor Degree of Technology",
      strem: "Information Technology",
      duration: "2019-2024(4 year)",
    },
    {
      institution: "Bihar Board of Open School",
      degree: "12th",
      strem: "PCM",
      duration: "2017-2019(2 year)",
    },
    {
      institution: "Veen Vidya Niketan",
      degree: "10th",
      strem: "All Subject",
      duration: "2016(1 year)",
    },
  ],
};

const skills = {
  tittle: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
  ],
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auot xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About me</TabsTrigger>
          </TabsList>

          {/*....Content...*/}
          <div className="min-h-[70vh] w-full overflow-auto mb-8">
            <TabsContent value="experience" className="full">
              <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{eperience.tittle}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {eperience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {eperience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.positon}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="full ">
              <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.tittle}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="full h-full ">
              <div className="flex flex-col gap-[30px] lg:mb-8 sm:mb-0">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.tittle}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about me"
              className="full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.tittle}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
