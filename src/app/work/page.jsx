"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fronted",
    tittle: "Project 1",
    desription:
      "The Parking Arms for Parking Vehicles website, built using Next.js and Tailwind CSS, offers a seamless experience for users seeking information and solutions related to parking management systems. Our platform combines cutting-edge technology with intuitive design to address the needs of parking operators, facility managers, and users alike",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "javascript" },
      { name: "Nextjs" },
    ],
    image: "/assest/work/Parking-Arms.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fronted",
    tittle: "Project 2",
    desription:
      "Link Healthcare is dedicated to connecting healthcare professionals with diverse job opportunities across hospitals. Our platform serves as a bridge between qualified candidates and hospitals seeking talented individuals to join their teams. Whether you are a healthcare provider looking for a new career opportunity or a hospital in need of skilled personnel, Link Healthcare simplifies the recruitment process with a user-friendly interface and comprehensive job listings",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "javascript" },
      { name: "Reactjs" },
    ],
    image: "/assest/work/LinkStaff.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    tittle: "Project 3",
    desription:
      " Udemy clone involves replicating the core functionalities of the popular online learning platform, Udemy.The Udemy clone platform aims to provide a comprehensive online learning experience, offering a wide range of courses taught by instructors from around the world. Users can enroll in courses, learn at their own pace, and gain new skills across various domains.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Reactjs" },
      { name: "Nodejs" },
      { name: "ExpressJs" },
      { name: "Mongdb" },
    ],
    image: "/assest/work/Udemy-Clone.png",
    live: "https://euphonious-blini-b979a0.netlify.app",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlidegeChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.desription}</p>
              <ul className="flex  gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items gap-4">
                {/*-----live------*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*****project-github----- */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlidegeChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[24px] h-[24px] item-center flex justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
