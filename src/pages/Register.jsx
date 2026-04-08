import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearRegisterData, registerUser } from "../redux/slices/userSlice";
import OTPBox from "../components/OTPBox";

// Register page component
const Register = () => {
  // Redux dispatch and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access loading and registration data from Redux store
  const { loading, registerData } = useSelector((state) => state.user);

  // Form state for user registration inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(formData));
  };

  // Handle successful OTP verification
  const handleOtpSuccess = () => {
    dispatch(clearRegisterData());
    navigate("/login");
  };

  return (
    // Main register page wrapper
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top navigation area */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo button */}
          <Link
            to="/"
            className="flex items-center justify-center h-16 w-16 rounded-full bg-[#71AC16]"
          >
            <img
              src="/icon/paper-plane(1) 1.png"
              alt="logo"
              className="h-8 w-8 rotate-90"
            />
          </Link>

          {/* Login navigation button */}
          <Link
            to="/login"
            className="rounded-full bg-[#71AC16] px-8 py-3 text-lg font-bold hover:bg-[#5f9513] transition"
          >
            LOGIN
          </Link>
        </div>

        {/* Main register content container */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left promotional visual section */}
          <div className="relative rounded-[36px] border border-white/10 bg-black p-6 md:p-10 overflow-hidden min-h-[650px] flex flex-col justify-between">
            {/* Decorative polygon dots */}
            <div className="absolute top-8 right-8 grid grid-cols-3 gap-2 opacity-70">
              {Array.from({ length: 12 }).map((_, i) => (
                <img key={i} src="/icon/p.png" alt="polygon" className="w-4 h-2" />
              ))}
            </div>

            {/* Social media section */}
            <div>
              <p className="text-gray-300 text-sm md:text-base mb-3">Follow On:</p>
              <div className="flex items-center gap-4">
                <img src="/icon/f_icon.png" alt="F" className="w-5 h-5" />
                <img src="/icon/i_icon.png" alt="I" className="w-5 h-5" />
                <img src="/icon/t_icon.png" alt="X" className="w-5 h-5" />
                <img src="/icon/l_icon.png" alt="L" className="w-5 h-5" />
              </div>
            </div>

            {/* Hero image */}
            <div className="flex justify-center">
              <img
                src="/image/two_man.png"
                alt="fitness"
                className="w-full max-w-[500px] object-contain"
              />
            </div>

            {/* Branding and CTA buttons */}
            <div className="text-center">
              <img
                src="/image/POWER.png"
                alt="POWER"
                className="w-full max-w-[420px] mx-auto"
              />

              <div className="mt-6 flex items-center justify-center gap-4">
                {/* Shop now button */}
                <button className="flex h-[58px] w-[220px] items-center justify-center gap-4 rounded-[16px] border-2 border-white bg-[#141414] text-[18px] font-medium text-white transition hover:scale-[1.02]">
                  SHOP NOW
                  <span className="text-[28px]">→</span>
                </button>

                {/* Location button */}
                <button className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border-2 border-white bg-[#141414] text-white transition hover:scale-[1.05]">
                  <MapPin size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Right registration form / OTP verification section */}
          <div className="rounded-[36px] border border-white/10 bg-[#111111] p-6 md:p-10 shadow-2xl">
            {!registerData ? (
              <>
                {/* Registration form heading */}
                <h1 className="text-4xl font-extrabold mb-3">Create Account</h1>
                <p className="text-gray-400 mb-8">
                  Join the gym movement and unlock your power.
                </p>

                {/* Registration form */}
                <form onSubmit={handleRegister} className="space-y-5">
                  {/* Name input fields */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white outline-none focus:border-[#71AC16]"
                      required
                    />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white outline-none focus:border-[#71AC16]"
                      required
                    />
                  </div>

                  {/* Email input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white outline-none focus:border-[#71AC16]"
                    required
                  />

                  {/* Password input */}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white outline-none focus:border-[#71AC16]"
                    required
                  />

                  {/* Confirm password input */}
                  <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white outline-none focus:border-[#71AC16]"
                    required
                  />

                  {/* Terms and conditions checkbox */}
                  <label className="flex items-center gap-3 text-gray-300">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="h-5 w-5 accent-[#71AC16]"
                    />
                    I agree to the Terms & Conditions
                  </label>

                  {/* Submit registration button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-2xl bg-[#71AC16] py-4 text-lg font-bold text-white transition hover:bg-[#5f9513] disabled:opacity-60"
                  >
                    {loading ? "Registering..." : "REGISTER"}
                  </button>
                </form>

                {/* Redirect to login */}
                <p className="mt-6 text-center text-gray-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#71AC16] font-semibold hover:underline">
                    Login
                  </Link>
                </p>
              </>
            ) : (
              // OTP verification component
              <OTPBox
                realOtp={registerData?.otp}
                email={registerData?.email}
                onSuccess={handleOtpSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;