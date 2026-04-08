import { MapPin, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SpecialityCard from "./SpecialityCard";

const Hero = () => {

  const testFunc = () => {
    console.log("Heloooooooooooooooo")
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* =========================================================
          MOBILE + TABLET VERSION
          ========================================================= */}
      <div className="block  md:hidden px-3 pt-3 pb-8">
        <div className="relative rounded-[28px] border-[3px] border-[#3aa0ff] bg-[#efefef] overflow-hidden">
          {/* Top Left Logo */}
          <div className="absolute left-0 top-0 z-30 h-[78px] w-[78px] rounded-br-[34px] bg-white flex items-center justify-center">
            <div className="h-[62px] w-[62px] rounded-full bg-[#71AC16] flex items-center justify-center">
              <img
                src="/icon/paper-plane(1) 1.png"
                alt="logo"
                className="h-8 w-8 rotate-90"
              />
            </div>
          </div>

          {/* Top Right Register */}
          <div className="absolute right-0 top-0 z-40 h-[78px] w-[170px] sm:w-[220px]  rounded-bl-[34px] bg-white flex items-center justify-center">
            <button onClick={testFunc} className="h-[56px] w-[140px] sm:w-[180px] rounded-full bg-[#71AC16] hover:bg-[#466f09] text-white text-[14px] sm:text-[16px] font-extrabold tracking-wide shadow-md transition hover:scale-[1.02]">
              REGISTER
            </button>
          </div>

          {/* Main Black Hero */}
          <div className="relative rounded-[34px] bg-black pt-[90px] pb-8 px-4 sm:px-6 min-h-[900px] sm:min-h-[980px]">
            {/* Mobile Nav */}
<div className="absolute top-4 left-45 -translate-x-1/2 z-20">
  <div className="w-[180px] flex items-center justify-between rounded-full border-2 border-white bg-black px-5 py-3 text-white">
    <span className="font-semibold text-sm sm:text-base">Menu</span>
    <Menu size={22} />
  </div>
</div>

            {/* Social */}
            <div className="mt-6 flex flex-col items-center text-white">
              <div className="flex items-center gap-2">
                <p className="text-sm sm:text-base font-semibold">Follow On:</p>
                <div className="flex items-center gap-4">
                  <img src="/icon/f_icon.png" alt="F" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/i_icon.png" alt="I" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/t_icon.png" alt="X" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/l_icon.png" alt="L" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative mt-8 flex justify-center">
              <img
                src="/image/two_man.png"
                alt="Two bodybuilders"
                className="w-full max-w-[700px] object-contain"
              />
            </div>

            {/* Text */}
            <div className="mt-[-30px] sm:mt-[-50px] relative z-20 flex flex-col items-center text-center">
              <img
                src="/image/POWER.png"
                alt="power"
                className="w-full max-w-[520px] sm:max-w-[650px]"
              />

              <div className="mt-6 flex items-center gap-4">
                <button className="flex h-[56px] sm:h-[62px] w-[190px] sm:w-[230px] items-center justify-center gap-4 rounded-[16px] border-2 border-white bg-[#141414] text-[17px] sm:text-[20px] font-medium text-white transition hover:scale-[1.02]">
                  SHOP NOW
                  <span className="text-[24px] sm:text-[28px]">→</span>
                </button>

                <button className="flex h-[56px] sm:h-[62px] w-[56px] sm:w-[62px] items-center justify-center rounded-[16px] border-2 border-white bg-[#141414] text-white transition hover:scale-[1.05]">
                  <MapPin size={24} />
                </button>
              </div>
            </div>

            {/* Specialty */}
            <div className="mt-10 max-w-[360px] mx-auto">
              <div className="rounded-[30px] bg-white p-3">
                <div className="rounded-[26px] bg-[#71AC16] p-5 text-white">
                  <h3 className="mb-6 text-[24px] sm:text-[28px] font-bold uppercase leading-tight">
                    Our Specialty
                  </h3>

                  <div className="space-y-4">
                    <SpecialityCard
                      icon={<img src="/icon/yoga1.png" alt="" />}
                      title="Ground running"
                    />
                    <SpecialityCard
                      icon={<img src="/icon/yoga2.png" alt="" />}
                      title="Yoga Assistance"
                    />
                    <div className="flex items-center gap-4 min-h-[90px] rounded-2xl rounded-b-[35px] border border-white/50 bg-[#8bb945] px-5 py-5 shadow-inner">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white bg-white/20 backdrop-blur-lg">
                        <img src="/icon/yoga2.png" alt="" />
                      </div>
                      <p className="text-[18px] sm:text-[20px] font-semibold text-white">
                        Personal Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-[110px] right-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-80">
              {Array.from({ length: 12 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>

            <div className="absolute bottom-5 right-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>

            <div className="absolute bottom-5 left-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>
          </div>
        </div>
      </div>


      {/*===========================================================
      Medium Screen
      ==============================================================*/}
        <div className="hidden md:block xl:hidden px-3 pt-3 pb-8">
        <div className="relative rounded-[28px] border-[3px] border-[#3aa0ff] bg-[#efefef] overflow-hidden">
          {/* Top Left Logo */}
          <div className="absolute left-0 top-0 z-30 h-[78px] w-[78px] rounded-br-[34px] bg-white flex items-center justify-center">
            <div className="h-[62px] w-[62px] rounded-full bg-[#71AC16] flex items-center justify-center">
              <img
                src="/icon/paper-plane(1) 1.png"
                alt="logo"
                className="h-8 w-8 rotate-90"
              />
            </div>
          </div>

          {/* Top Right Register */}
          <div className="absolute right-0 top-0 z-30 h-[78px] w-[170px] sm:w-[220px]  rounded-bl-[34px] bg-white flex items-center justify-center">
            <button onClick={testFunc} className="h-[56px] w-[140px] sm:w-[180px] rounded-full bg-[#71AC16] hover:bg-[#466f09] text-white text-[14px] sm:text-[16px] font-extrabold tracking-wide shadow-md transition hover:scale-[1.02]">
              REGISTER
            </button>
          </div>

          {/* Main Black Hero */}
          <div className="relative rounded-[34px] bg-black pt-[90px] pb-8 px-4 sm:px-6 min-h-[900px] sm:min-h-[980px]">
          {/* NAVBAR */}
          <div className=" absolute top-2 left-20 z-30 flex items-center rounded-full border-2 border-white bg-black px-2 py-2 shadow-[0_0_0_2px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-10 rounded-full bg-black px-8 py-4 text-white text-[20px] font-medium">
              <Link to="#" className="hover:text-[#86b817] transition">
                Home
              </Link>
              <Link to="#" className="hover:text-[#86b817] transition">
                Our gym location
              </Link>
              <span className="text-white/70">|</span>
            </div>

            <div className="ml-3 flex items-center gap-2 rounded-full bg-[#3d3d3d] px-8 py-4 text-white/90 min-w-[220px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-20 text-white placeholder:text-white bg-transparent outline-none"
              />
              <img src="/icon/magnifying.png" alt="" className="ml-auto w-5 h-5" />
            </div>
          </div>

            {/* Social */}
            <div className="mt-6 flex flex-col items-center text-white">
              <div className="flex items-center gap-2">
                <p className="text-sm sm:text-base font-semibold">Follow On:</p>
                <div className="flex items-center gap-4">
                  <img src="/icon/f_icon.png" alt="F" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/i_icon.png" alt="I" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/t_icon.png" alt="X" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <img src="/icon/l_icon.png" alt="L" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative mt-8 flex justify-center">
              <img
                src="/image/two_man.png"
                alt="Two bodybuilders"
                className="w-full max-w-[700px] object-contain"
              />
            </div>

            {/* Text */}
            <div className="mt-[-30px] sm:mt-[-50px] relative z-20 flex flex-col items-center text-center">
              <img
                src="/image/POWER.png"
                alt="power"
                className="w-full max-w-[520px] sm:max-w-[650px]"
              />

              <div className="mt-6 flex items-center gap-4">
                <button className="flex h-[56px] sm:h-[62px] w-[190px] sm:w-[230px] items-center justify-center gap-4 rounded-[16px] border-2 border-white bg-[#141414] text-[17px] sm:text-[20px] font-medium text-white transition hover:scale-[1.02]">
                  SHOP NOW
                  <span className="text-[24px] sm:text-[28px]">→</span>
                </button>

                <button className="flex h-[56px] sm:h-[62px] w-[56px] sm:w-[62px] items-center justify-center rounded-[16px] border-2 border-white bg-[#141414] text-white transition hover:scale-[1.05]">
                  <MapPin size={24} />
                </button>
              </div>
            </div>

            {/* Specialty */}
            <div className="mt-10 max-w-[360px] mx-auto">
              <div className="rounded-[30px] bg-white p-3">
                <div className="rounded-[26px] bg-[#71AC16] p-5 text-white">
                  <h3 className="mb-6 text-[24px] sm:text-[28px] font-bold uppercase leading-tight">
                    Our Specialty
                  </h3>

                  <div className="space-y-4">
                    <SpecialityCard
                      icon={<img src="/icon/yoga1.png" alt="" />}
                      title="Ground running"
                    />
                    <SpecialityCard
                      icon={<img src="/icon/yoga2.png" alt="" />}
                      title="Yoga Assistance"
                    />
                    <div className="flex items-center gap-4 min-h-[90px] rounded-2xl rounded-b-[35px] border border-white/50 bg-[#8bb945] px-5 py-5 shadow-inner">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white bg-white/20 backdrop-blur-lg">
                        <img src="/icon/yoga2.png" alt="" />
                      </div>
                      <p className="text-[18px] sm:text-[20px] font-semibold text-white">
                        Personal Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-[110px] right-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-80">
              {Array.from({ length: 12 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>

            <div className="absolute bottom-5 right-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>

            <div className="absolute bottom-5 left-4 grid grid-cols-3 gap-x-3 gap-y-2 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP / LARGE SCREEN VERSION
          ========================================================= */}
      <div className="hidden xl:block">
        <section className="w-full min-h-screen mb-20 md:p-4 overflow-hidden">
          <div className="absolute top-40 right-15 grid grid-cols-3 gap-x-3 gap-y-2 opacity-60">
              {Array.from({ length: 12 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-5 h-3" />
              ))}
            </div>
          {/* Top Left Logo Bubble */}
          <div className="absolute left-6 top-4 z-30 h-[95px] w-[95px] rounded-br-[42px] flex items-center justify-center">
            <div className="h-[95px] w-[95px] rounded-full bg-[#71AC16] flex items-center justify-center">
              <div className="">
                <img
                  src="/icon/paper-plane(1) 1.png"
                  alt="logo"
                  className="h-12 w-12 rotate-90 hover:scale-105 transition transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Top Right Register Bubble */}
          <div className="absolute right-10 top-3 z-30 h-[80px] w-[300px] rounded-bl-[42px] flex items-center justify-center">
            <button onClick={testFunc} className="h-[74px] w-[120vh] rounded-full bg-[#71AC16] text-white text-[20px] font-extrabold tracking-wide shadow-md transition hover:scale-[1.02]">
              REGISTER
            </button>
          </div>

          <div>
            <img src="/image/Subtract.png" alt="" className="w-full h-[110vh]" />
          </div>

          {/* NAVBAR */}
          <div className="absolute top-8 left-45 z-30 flex items-center rounded-full border-2 border-white bg-black px-2 py-2 shadow-[0_0_0_2px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-10 rounded-full bg-black px-8 py-4 text-white text-[20px] font-medium">
              <Link to="#" className="hover:text-[#86b817] transition">
                Home
              </Link>
              <Link to="#" className="hover:text-[#86b817] transition">
                Our gym location
              </Link>
              <span className="text-white/70">|</span>
            </div>

            <div className="ml-3 flex items-center gap-2 rounded-full bg-[#3d3d3d] px-8 py-4 text-white/90 min-w-[220px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-20 text-white placeholder:text-white bg-transparent outline-none"
              />
              <img src="/icon/magnifying.png" alt="" className="ml-auto w-5 h-5" />
            </div>
          </div>

          {/* Social Left */}
          <div className="absolute left-22 top-40 z-20 flex items-center justify-center gap-2 text-white">
            <p className="text-[24px] font-semibold text-xs">Follow On:</p>
            <div className="flex items-center gap-5 text-white">
              <img src="/icon/f_icon.png" alt="F" className="w-5 h-5" />
              <img src="/icon/i_icon.png" alt="I" className="w-5 h-5" />
              <img src="/icon/t_icon.png" alt="X" className="w-5 h-5" />
              <img src="/icon/l_icon.png" alt="L" className="w-5 h-5" />
            </div>
          </div>

          {/* BACKGROUND DOTTED ICON */}
          <div>
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-22 top-50" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-22 top-55" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-33 top-53" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-33 top-60" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-45 top-57" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-58 top-50" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-58 top-57" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-58 top-67" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-70 top-56" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-70 top-50" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-70 top-67" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-70 top-72" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-82 top-50" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-82 top-60" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-82 top-65" />
            <img src="/icon/p.png" alt="" className="w-5 h-3 absolute left-82 top-70" />
          </div>

          {/* Left Speciality Card */}
          <div className="absolute left-0 top-72 z-20 h-[270px] w-[380px] rounded-tr-[120px] rounded-br-[55px] rounded-tl-[0px] rounded-bl-[55px] p-4">
            <img src="/image/Vector3.png" alt="" className="h-[71vh] w-full" />
          </div>

          {/* Left Speciality Card Box*/}
          <div className="absolute left-10 top-105 z-20">
            <h3 className="mb-8 text-[30px] font-bold uppercase text-white leading-tight">
              Our Specialty
            </h3>

            <div className="space-y-5">
              <SpecialityCard
                icon={
                  <>
                    <img src="/icon/yoga1.png" alt="" />
                  </>
                }
                title="Ground running"
              />
              <SpecialityCard
                icon={
                  <>
                    <img src="/icon/yoga2.png" alt="" />
                  </>
                }
                title="Yoga Assistance"
              />
              <div className="flex items-center gap-4 h-[12vh] w-[40vh] rounded-2xl rounded-b-[35px] border border-white/50 bg-[#8bb945] px-5 py-5 shadow-inner">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white  backdrop-blur-lg">
                  <img src="/icon/yoga2.png" alt="" />
                </div>
                <p className="text-[20px] font-semibold text-white">
                  Personal Trainer
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/image/two_man.png"
              alt="Two bodybuilders"
              className="absolute top-1 -right-8 h-[1000px] w-[1118px] object-contain select-none pointer-events-none"
            />
          </div>

          <div className="absolute left-170 top-[465px] z-20">
            <img src="/image/POWER.png" alt="power" className="w-[105vh]" />

            <div className="mt-8 flex items-center gap-5">
              <button className="flex h-[65px] w-[260px] items-center justify-center gap-5 rounded-[16px] border-2 border-white bg-[#141414] text-[22px] font-medium text-white transition hover:scale-[1.02]">
                SHOP NOW
                <span className="text-[30px]">→</span>
              </button>

              <button className="flex h-[65px] w-[72px] items-center justify-center rounded-[16px] border-2 border-white bg-[#141414] text-white transition hover:scale-[1.05]">
                <MapPin size={28} />
              </button>
            </div>
          </div>

          {/* Bottom Gray Dots Right */}
          <div className="absolute bottom-115 right-30 z-10 grid grid-cols-3 gap-x-5 gap-y-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <img key={i} src="/icon/p.png" alt="polygon" className="w-5 h-3" />
            ))}
          </div>

          {/* Bottom Gray Dots Left Bottom */}
          <div className="absolute -bottom-55 left-50 z-10 grid grid-cols-3 gap-x-5 gap-y-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>
                <img
                  src="/icon/p.png"
                  alt="polygon"
                  className="w-5 h-3 bg-gray-300 rounded-b-full"
                />
              </div>
            ))}
          </div>

          {/* Bottom Gray Dots Right Bottom */}
          <div className="absolute -bottom-60 right-15 z-10 grid grid-cols-3 gap-x-5 gap-y-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>
                <img
                  src="/icon/p.png"
                  alt="polygon"
                  className="w-3 h-5 bg-gray-300 rounded-l-full"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;