import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../redux/slices/userSlice";


const OTPBox = ({ realOtp, email, onSuccess }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const [otpInput, setOtpInput] = useState("");

  const handleVerify = async () => {
    if (!otpInput) {
      return toast.error("Please enter OTP");
    }

    const result = await dispatch(
      verifyOtp({
        email,
        otp: otpInput,
      })
    );

    if (result?.success) {
      onSuccess();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-[28px] border border-white/10 bg-[#111111] p-8 shadow-2xl">
      <h2 className="text-3xl font-extrabold text-white text-center mb-3">
        Verify OTP
      </h2>

      <p className="text-center text-gray-300 mb-2">
        We sent an OTP to:
      </p>

      <p className="text-center text-[#71AC16] font-semibold mb-6">
        {email}
      </p>

      {/* Demo OTP View */}
      <div className="mb-6 rounded-2xl bg-[#1c1c1c] border border-[#71AC16]/30 p-4 text-center">
        <p className="text-sm text-gray-400 mb-1">Your OTP (Demo)</p>
        <p className="text-3xl tracking-[10px] font-bold text-[#71AC16]">
          {realOtp}
        </p>
      </div>

      <input
        type="text"
        maxLength={6}
        value={otpInput}
        onChange={(e) => setOtpInput(e.target.value)}
        placeholder="Enter OTP"
        className="w-full rounded-2xl border border-gray-700 bg-[#1c1c1c] px-5 py-4 text-white text-center text-2xl tracking-[8px] outline-none focus:border-[#71AC16]"
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-[#71AC16] py-4 text-lg font-bold text-white transition hover:bg-[#5f9513] disabled:opacity-60"
      >
        {loading ? "Verifying..." : "Verify & Go to Login"}
      </button>
    </div>
  );
};

export default OTPBox;