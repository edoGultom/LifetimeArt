import Banner from "@/assets/images/banner.jpg";
import { IconArrowRight, IconStar } from "@/components/svg";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section className="relative bg-background-hero h-[813px] xl:h-[899.5px] text-white">
      <Navigation />
      <div className="relative mx-auto max-w-[var(--breakpoint-xl)] flex w-full lg:gap-20 px-5 xl:pb-0 xl:px-20 overflow-hidden">
        {/* LEFT */}
        <div className="absolute z-40 right-0 left-0 bottom-0 top-[calc(62px+20px)] md:top-[96px] xl:top-0 xl:static xl:z-0 md:px-5 xl:px-0 bg-background-hero/80">
          <div className="flex flex-col w-full h-full  px-5 mt-[189.06px] xl:mt-[212.28px] md:mt-[247.06px]">
            <div className="flex gap-[6px] px-3 py-2 bg-background-label max-w-[159px] rounded-3xl items-center">
              <div className="w-[17.44px]h-[17.44px] p-[3.56px] bg-[var(--GREY_1)] rounded-full">
                <div className="w-[10.31px] h-[10.31px] p-[1.16px] rounded-full bg-background-button">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-Banner-Label-R">Available for work</span>
            </div>
            <span className="mt-1 text-Banner-Heading-Mobile-M md:text-Banner-Heading-M text-left">
              Your trusted partner for quality home{" "}
              <br className="hidden lg:block xl:hidden" />
              improvement
            </span>
            <span className="mt-6 text-Para-Mobile-R md:text-Para-R text-[var(--GREY_1)] text-left">
              LifetimeArt delivers expert home improvements,{" "}
              <br className="hidden md:block" />
              creating beautiful and functional spaces with{" "}
              <br className="hidden md:block xl:hidden" />
              quality
              <br className="hidden xl:block" /> craftsmanship.
            </span>
            {/* Button Work with status */}
            <div
              className="mt-14 max-w-[191.23px] justify-between items-center flex px-4 py-2.5 rounded-4xl bg-background-button/10 backdrop-blur-[10px]"
              role="button"
            >
              <span className="text-buttonname-M">Work with us</span>
              <div className="flex items-center justify-center w-10 h-10 bg-white p-[5.86px] rounded-full">
                <IconArrowRight className="stroke-[var(--BRAND_1)]" />
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div
          className="relative w-full h-[695px] xl:h-[835.5px] mt-[calc(62px+20px)] md:mt-[96px] xl:mt-[30.5px] xl:mb-[30.5px] xl:max-w-[652.72px] bg-no-repeat bg-cover bg-center rounded-[12px]"
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="hidden xl:block xl:absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-background-hero/80 to-transparent" />

          <div className="hidden xl:block xl:absolute 2xl:hidden bottom-10 right-10  z-40">
            <div className="hidden xl:flex lg:hidden 2xl:hidden lg:flex-col gap-[9px] bg-background-hero/30 backdrop-blur-[15px] p-6 rounded-[8px] w-[240px]">
              <div className="flex  gap-[5.67px]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <IconStar key={idx} className="fill-white" />
                ))}
              </div>
              <span className="text-Banner-Rate-Label-R">
                &quot;LifetimeArt has been a game- changer for my home. Their
                ability to blend functionality with exquisite design is
                unparalleled.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
