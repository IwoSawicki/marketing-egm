import sliderImg1 from "public/Services/Webdesign/hero-slider-img-1.png";
import sliderImg2 from "public/Services/Webdesign/hero-slider-img-2.png";
import sliderImg3 from "public/Services/Webdesign/hero-slider-img-3.png";
import sliderImg4 from "public/Services/Webdesign/hero-slider-img-4.png";
import sliderImg5 from "public/Services/Webdesign/hero-slider-img-5.png";
import sliderImg6 from "public/Services/Webdesign/hero-slider-img-6.png";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-20 lg:py-0  bg-gradient-to-br from-[#1b232d] to-[#0b1116] ">
      <div className="flex flex-col max-w-screen-2xl mx-auto lg:flex-row lg:items-center ">
        <div className="my-16 px-3 lg:w-1/2 lg:pr-20">
          <h1 className="text-4xl mb-4 lg:mb-6 lg:text-6xl">
            Verkaufe überall & jederzeit.
          </h1>
          <p className="text-base lg:text-xl font-light">
            Ob Prdukte, Dienstleistungen, Kurse, Gutscheine oder Lebensmittel.
            Heute kann man alles Online verkaufen. Nutze diese Trend aus,
            steigere dein Umsatz und skaliere dein Unternehmen Online
          </p>
        </div>
        <div className="lg:w-1/2 lg:h-screen">
          <div className="relative flex overflow-x-hidden lg:overflow-y-hidden duration-300">
            <div className="py-6 lg:py-0 animate-marquee lg:animate-marqueeVertical whitespace-nowrap flex lg:flex-col">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>

            <div className="absolute top-0 py-6 lg:py-0 animate-marquee2 lg:animate-marqueeVertical2 whitespace-nowrap flex lg:flex-col ">
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg1}
                  alt="Webdesign Slider Bild 1"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg2}
                  alt="Webdesign Slider Bild 2"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg3}
                  alt="Webdesign Slider Bild 3"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg4}
                  alt="Webdesign Slider Bild 4"
                  priority
                  className="min-w-[400px]"
                />
              </div>

              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg5}
                  alt="Webdesign Slider Bild 5"
                  priority
                  className="min-w-[400px]"
                />
              </div>
              <div className="mx-4 lg:mx-0 lg:my-4 w-full">
                <Image
                  src={sliderImg6}
                  alt="Webdesign Slider Bild 6"
                  priority
                  className="min-w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}