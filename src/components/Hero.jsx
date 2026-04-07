import {
  Activity,
  Dumbbell,
  MapPin,
  PersonStanding,
  Search,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SpecialityCard from "./SpecialityCard";

const Hero = () => {
  return (
    <section className="w-full min-h-screen md:p-4 overflow-hidden">
      {/* Top Left Logo Bubble */}
      <div className="absolute left-6 top-4 z-30 h-[95px] w-[95px] rounded-br-[42px] bg-white flex items-center justify-center">
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
      <div className="absolute right-10 top-3 z-30 h-[80px] w-[300px] rounded-bl-[42px] bg-white flex items-center justify-center">
        <button className="h-[74px] w-[120vh] rounded-full bg-[#71AC16] text-white text-[20px] font-extrabold tracking-wide shadow-md transition hover:scale-[1.02]">
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
          <input type="text" placeholder="Search..." className="w-20 text-white placeholder:text-white" />
          <img src="/icon/magnifying.png" alt="" className="ml-auto w-5 h-5"/>
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
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-22 top-50"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-22 top-55"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-33 top-53"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-33 top-60"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-45 top-57"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-58 top-50"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-58 top-57"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-58 top-67"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-70 top-56"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-70 top-50"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-70 top-67"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-70 top-72"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-82 top-50"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-82 top-60"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-82 top-65"
        />
        <img
          src="/icon/p.png"
          alt=""
          className="w-5 h-3 absolute left-82 top-70"
        />
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
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white bg-white/20 backdrop-blur-lg">
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

      <div className="absolute left-175 top-[465px] z-20">
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
          <>
          <img src="/icon/p.png" alt="polygon" className="w-5 h-3"/>
          </>
        ))}
      </div>
    </section>
  );
};

export default Hero;
