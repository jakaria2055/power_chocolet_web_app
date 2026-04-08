import { Play } from "lucide-react";

export default function Train() {
  return (
    <section className="w-full px-3 py-6 pb-30 sm:px-4 md:px-5 lg:px-6 overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1450px]">
        {/* Top Right Dots */}
        <div className="absolute right-[8%] top-0 hidden md:grid grid-cols-3 gap-2 opacity-60">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="h-5 w-2 rounded-full bg-[#c9c9c9]"></span>
          ))}
        </div>

        {/* Heading */}
        <div className="mb-8 px-2 ml-2 sm:px-1">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#444]">
            Train Like a Champion
          </h2>
          <p className="mt-1 text-[15px] sm:text-[18px] text-[#4b4b4b]">
            Unleash Your Power with Expert Boxing Training
          </p>
        </div>

        {/* Main Box */}
        <div className="relative rounded-[34px] sm:rounded-[40px] lg:rounded-[48px] bg-black hover:outline-2 hover:outline-blue-400 px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[430px_1fr_1fr] xl:grid-cols-[460px_1fr_1fr] gap-8 lg:gap-10 items-stretch">
            {/* Left Image */}
            <div className="h-full">
              <div className="h-[380px] sm:h-[480px] lg:h-full min-h-[420px] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-[#6e98b0]">
                <img
                  src="/image/boxer_man.png"
                  alt="Boxing athlete"
                  className="h-full w-full object-cover transition duration-300 transform hover:scale-105 hover:outline-2 hover:outline-blue-400"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col justify-between py-1 sm:py-2 lg:py-4">
              <div>
                <h3 className="text-white text-[28px] sm:text-[32px] font-semibold hover:underline hover:decoration-blue-400 mb-8 sm:mb-10">
                  Training Focus Areas:
                </h3>

                <div className="space-y-10 sm:space-y-12">
                  <InfoBlock
                    title="Strength & Conditioning"
                    text="Develop knockout power with a mix of strength training and explosive movements."
                  />
                  <InfoBlock
                    title="Speed & Agility"
                    text="Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination."
                  />
                  <InfoBlock
                    title="Endurance Training"
                    text="Boost your stamina with high-intensity circuits that keep you fighting strong till the final round."
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between py-1 sm:py-2 lg:py-4">
              <div>
                <h3 className="text-white text-[28px] sm:text-[32px] font-semibold mb-8 sm:mb-10 hover:underline hover:decoration-blue-400">
                  Why Train With Us:
                </h3>

                <div className="space-y-10 sm:space-y-12">
                  <InfoBlock
                    title="Expert Coaches"
                    text="Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals."
                  />
                  <InfoBlock
                    title="Flexible Programs"
                    text="Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs."
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <button className="h-[68px] sm:h-[74px] px-8 sm:px-14 rounded-[18px] bg-[#57B233] text-white text-[22px] sm:text-[26px] font-semibold shadow-[0_6px_20px_rgba(103,190,46,0.25)] transition hover:scale-[1.03]">
                  Punch Now
                </button>

                <button className="relative flex h-[65px] w-[65px] sm:h-[78px] sm:w-[78px] items-center justify-center rounded-full border border-[#67be2e]/20 text-[#57B233] transition hover:scale-105 hover:focus:border-blue-500">
                  <div className="absolute inset-0 rounded-full border-2 hover:border-4 hover:border-blue-400 border-dashed border-[#67be2e]/70"></div>
                  <Play
                    size={36}
                    fill="#67be2e"
                    strokeWidth={1.8}
                    className="ml-1 z-10"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-20 bottom-[-95px] hidden md:grid grid-cols-3 gap-4 -rotate-45 ">
            {Array.from({ length: 10 }).map((_, i) => (
              <div>
                <img
                  key={i}
                  src="/icon/p.png"
                  alt="polygon"
                  className="w-4 h-2 bg-gray-400/50 rounded-b-full rounded-t-4xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div>
      <h4 className="text-[#cfcfcf] text-[22px] sm:text-[24px] font-semibold leading-tight hover:underline hover:decoration-blue-400">
        {title}
      </h4>
      <p className="mt-3 text-[#a7a7a7] text-[17px] sm:text-[18px] leading-[1.65] hover:underline hover:decoration-blue-400">
        {text}
      </p>
    </div>
  );
}
