"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting Edge Technology!",
    description: "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide.",
    subTitle: "Industry",
    backgroundImage: "/image/technology.webp",
  },
  {
    title: "Digital Marketing!",
    description: "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Grow Brand",
    backgroundImage: "/image/mm.jpg",

  },
];


export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      {/* <Typography variant="h6" className="text-center mb-2" color="orange">
        About the M-Cube
      </Typography> */}
      <Typography variant="h2" className="text-left" color="blue-gray">
      What We Do
      </Typography>
      
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Explore Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
            backgroundImage="/image/cloud.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
