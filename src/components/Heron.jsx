import {
  Search,
  MapPin,
  Dumbbell,
  PersonStanding,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen md:p-4 overflow-hidden">
  
        {/* Top Left Logo Bubble */}
        <div className="absolute left-0 -top-1 z-30 h-[95px] w-[95px] rounded-br-[42px] bg-white flex items-center justify-center">
          <div className="h-[78px] w-[78px] rounded-full bg-[#86b817] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-[6px] rotate-45">
              <img src="/icon/paper-plane(1) 1.png" alt="logo" className="h-10 w-10 rotate-45"/>
            </div>
          </div>
        </div>

        {/* Top Right Register Bubble */}
        <div className="absolute right-0 top-0 z-30 h-[95px] w-[250px] rounded-bl-[42px] bg-white flex items-center justify-center">
          <button className="h-[68px] w-[220px] rounded-full bg-[#86b817] text-white text-[18px] font-extrabold tracking-wide shadow-md transition hover:scale-[1.02]">
            REGISTER
          </button>
        </div>

        {/* Main Black Hero Container */}
        <div className="absolute left-[14px] right-[14px] top-[55px] bottom-[90px] rounded-[42px] bg-black overflow-hidden">
          {/* Navbar */}
          <div className="absolute left-[110px] top-[16px] z-20">
            <div className="flex items-center rounded-full border-2 border-white bg-black px-2 py-2 shadow-[0_0_0_2px_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-10 rounded-full bg-black px-8 py-4 text-white text-[20px] font-medium">
                <a href="#" className="hover:text-[#86b817] transition">
                  Home
                </a>
                <a href="#" className="hover:text-[#86b817] transition">
                  Our gym location
                </a>
                <span className="text-white/70">|</span>
              </div>

              <div className="ml-3 flex items-center gap-3 rounded-full bg-[#3d3d3d] px-8 py-4 text-white/90 min-w-[220px]">
                <span className="text-[18px] text-white/80">Search</span>
                <Search size={20} className="ml-auto" />
              </div>
            </div>
          </div>

          {/* Social Left */}
          <div className="absolute left-[48px] top-[145px] z-20 text-white">
            <p className="mb-5 text-[24px] font-bold">Follow On:</p>
            <div className="flex items-center gap-5 text-white">
              <span className="text-[26px] font-bold">f</span>
              <span className="text-[24px] font-semibold">◎</span>
              <span className="text-[24px] font-semibold">X</span>
              <span className="text-[24px] font-semibold">L</span>
            </div>
          </div>

          {/* Left Speciality Card */}
          <div className="absolute left-0 top-[165px] z-20 h-[470px] w-[300px] rounded-tr-[120px] rounded-br-[55px] rounded-tl-[0px] rounded-bl-[55px] bg-white p-4">
            <div className="h-full w-full rounded-tr-[95px] rounded-br-[45px] rounded-bl-[45px] bg-[#86b817] px-6 py-8 text-white">
              <h3 className="mb-8 text-[24px] font-extrabold uppercase leading-tight">
                Our Specialty
              </h3>

              <div className="space-y-5">
                <SpecialityCard
                  icon={<Activity size={34} />}
                  title="Ground running"
                />
                <SpecialityCard
                  icon={<PersonStanding size={34} />}
                  title="Yoga Assistance"
                />
                <SpecialityCard
                  icon={<Dumbbell size={34} />}
                  title="Personal Trainer"
                />
              </div>
            </div>
          </div>

          {/* Right Dots */}
          <div className="absolute right-[38px] top-[88px] z-20 grid grid-cols-3 gap-x-4 gap-y-3 opacity-80">
            {Array.from({ length: 15 }).map((_, i) => (
              <span
                key={i}
                className="h-[9px] w-[28px] rounded-full bg-[#5e5e5e]"
              ></span>
            ))}
          </div>

          {/* Left Upper Dots */}
          <div className="absolute left-[45px] top-[235px] z-10 grid grid-cols-6 gap-x-4 gap-y-4 opacity-70">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="h-[9px] w-[24px] rounded-full bg-[#575757]"
              ></span>
            ))}
          </div>

          {/* Left Lower Green Dots */}
          <div className="absolute left-[20px] top-[370px] z-10 grid grid-cols-6 gap-x-4 gap-y-4 opacity-70">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="h-[9px] w-[24px] rounded-full bg-[#bddb75]"
              ></span>
            ))}
          </div>

          {/* Bottom Gray Dots Left */}
          <div className="absolute bottom-[22px] left-[190px] z-10 grid grid-cols-2 gap-x-4 gap-y-3 opacity-80">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-[18px] w-[8px] rounded-full bg-[#c7c7c7]"
              ></span>
            ))}
          </div>

          {/* Bottom Gray Dots Right */}
          <div className="absolute bottom-[18px] right-[28px] z-10 grid grid-cols-2 gap-x-4 gap-y-3 opacity-80">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-[18px] w-[8px] rounded-full bg-[#c7c7c7]"
              ></span>
            ))}
          </div>

          {/* Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/two-man.png"
              alt="Two bodybuilders"
              className="absolute top-[70px] right-[70px] h-[610px] w-auto object-contain select-none pointer-events-none"
            />
          </div>

          {/* Hero Text */}
          <div className="absolute left-[390px] top-[360px] z-20">
            <h1 className="leading-[0.95] font-extrabold uppercase tracking-tight">
              <span className="block text-[98px] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.35)]">
                Power Your
              </span>
              <span className="block text-[110px] text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
                Pontetiale
              </span>
            </h1>

            <div className="mt-8 flex items-center gap-5">
              <button className="flex h-[72px] w-[260px] items-center justify-center gap-5 rounded-[16px] border-2 border-white bg-[#141414] text-[22px] font-medium text-white transition hover:scale-[1.02]">
                SHOP NOW
                <span className="text-[30px]">→</span>
              </button>

              <button className="flex h-[72px] w-[72px] items-center justify-center rounded-[16px] border-2 border-white bg-[#141414] text-white transition hover:scale-[1.05]">
                <MapPin size={28} />
              </button>
            </div>
          </div>
        </div>
 
    </section>
  );
}

function SpecialityCard({ icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-[22px] border border-white/50 bg-[#9bc63c] px-5 py-5 shadow-inner">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/60 text-white">
        {icon}
      </div>
      <p className="text-[20px] font-semibold">{title}</p>
    </div>
  );
}
