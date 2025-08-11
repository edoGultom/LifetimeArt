import React from "react";
import ImageGalery from "./ImageGalery";
import Label from "@/components/atom/Lable";

export default function AboutUs() {
  const aboutsNumber = [
    {
      label: "Years experience",
      desc: "Improving homes with expert craftsmanship for years",
      count: "8",
    },
    {
      label: "Projects completed",
      desc: "Over 250 successful projects delivered with quality and care",
      count: "26",
    },
    {
      label: "Skilled Tradespeople",
      desc: "Our team of 30 experts ensures top-quality results",
      count: "30",
    },
    {
      label: "Client satisfaction",
      desc: "All of our clients are satisfied with our work and service",
      count: "100%",
    },
  ];
  return (
    <section id="about">
      {/* TITLE */}
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col md:flex-row gap-20 w-full bg-white md:px-10 xl:px-20 px-10 py-[120px]">
        <div className="flex flex-1 flex-col  gap-1 ">
          <Label>About us</Label>
          <span className="text-Title-Section-M text-title">
            Home <br />
            Improvement <br />
            Specialists
          </span>
        </div>
        <div className="flex-1  text-Para-R text-paragraph ">
          Welcome to LifetimeArt , your trusted home improvement experts,
          dedicated to transforming homes with precision and care. With years of
          experience in building kitchens, bathrooms, garages, and more, we take
          pride in delivering top-quality craftsmanship and a seamless customer
          experience. Our mission is to bring your vision to life while ensuring
          clear communication and expert guidance at every step. Let’s create a
          home you’ll love!
        </div>
      </div>
      {/* CAROUSEL */}
      <ImageGalery />
      {/* Experience About */}
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex gap-20 w-full bg-white md:px-10 xl:px-20 px-10 py-[120px]">
        <div className="grid w-full md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:md:grid-cols-4 grid-rows-1 gap-x-[120px] gap-y-[120px]">
          {aboutsNumber.map((item) => (
            <div
              key={item.label}
              className="bg-white flex flex-col gap-2 w-[295px] h-[180px] md:w-[412px] md:h-[156px] lg:w-[540px] xl:w-[230px] xl:h-[180px]"
            >
              <span className="text-Number-L">{item.count}</span>
              <div className="flex flex-col">
                <span className="text-Sub-Number-SB text-title">
                  {item.label}
                </span>
                <span className="text-Sub-Desc-Number-R">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
