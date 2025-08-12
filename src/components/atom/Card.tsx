import React from "react";
import { FC } from "react";
import { IconStar } from "../svg";
import classNames from "classnames";
import { Testimonial } from "@/types/testimonials";
import Citation from "./Citation";

type CardProps = {
  className?: string;
  item: Testimonial;
};

const Card: FC<CardProps> = ({ className, item }) => {
  return (
    <div
      className={classNames(
        "w-[295px] h-[315px] md:min-w-[343px] xl:min-w-[342px] 2xl:min-w-[347px] border border-[var(--BORDER_1)] p-8 rounded-[12px]",
        className
      )}
    >
      <div className="flex flex-col w-full h-full gap-7">
        <div className="flex-1 flex flex-col gap-[9px] overflow-hidden">
          <div className="flex gap-[5.67px]">
            {Array.from({ length: item.rate }).map((_, idx) => (
              <IconStar key={idx} className="fill-background-hero" />
            ))}
          </div>
          <div className="flex text-Desc-Accordion-R text-paragraph  whitespace-normal">
            Refit transformed our outdoor space with a beautiful garden path.
            The work was completed on time, and the finish is excellent. A great
            team to work with!
          </div>
        </div>
        <div className="flex-none ">
          <Citation name={item.name} url={item.url} />
        </div>
      </div>
    </div>
  );
};
export default Card;
