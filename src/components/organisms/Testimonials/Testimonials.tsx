import Label from "@/components/atom/Lable";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col w-full bg-white md:px-10 xl:px-20 px-10 py-[120px]">
        {/* Title */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-1 flex-col justify-center items-center gap-2">
            <Label>Testimonials</Label>
            <span className="text-Title-Section-M text-title">
              Hear from our clients
            </span>
          </div>
          <span className="text-text-Para-R text-paragraph text-center">
            Hear from our happy clients about their experience working with
            Refit and the quality of our craftsmanship.
          </span>
        </div>

        {/* locomotive animation */}
        <div className="mt-24 mb-[60px]">
          <div className="p-[1px]">
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
