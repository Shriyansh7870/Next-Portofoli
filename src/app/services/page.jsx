"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Our web development services provide comprehensive solutions to help businesses establish a robust online presence. We specialize in creating custom websites that are visually appealing, highly functional, and optimized for user experience and search engines.",
    href: "https://github.com/Shriyansh7870",
  },
  {
    num: "2",
    title: "Android Developer",
    desc: "Our Android development services cater to businesses and individuals looking to create powerful, user-friendly, and scalable mobile applications for the Android platform. With a focus on delivering high-quality solutions, we ensure your app stands out in the crowded marketplace.",
    href: "https://github.com/Shriyansh7870",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "UI/UX design is a crucial aspect of Android app development, focusing on creating intuitive, visually appealing, and user-friendly interfaces. Our UI/UX design services ensure your Android application not only looks great but also provides an exceptional user experience, increasing engagement and satisfaction.",
    href: "https://github.com/Shriyansh7870",
  },
  {
    num: "04",
    title: "Software Developer",
    desc: "Our software development services cater to businesses seeking robust, scalable, and innovative solutions tailored to their specific needs. We specialize in creating high-performance software applications that drive efficiency, productivity, and growth.",
    href: "https://github.com/Shriyansh7870",
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex lex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-center items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                <p className="text-white/60">{services.desc}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
