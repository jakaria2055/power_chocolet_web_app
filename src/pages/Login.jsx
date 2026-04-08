import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user || {});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, navigate));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-[30px] border border-white/10 bg-[#111] p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#71AC16] shadow-lg">
            <img
              src="/icon/paper-plane(1) 1.png"
              alt="logo"
              className="h-10 w-10 rotate-90"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">Welcome Back</h1>
          <p className="mt-2 text-white/70">
            Login and continue your fitness journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#71AC16]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#71AC16]"
              required
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                name="remember_me"
                checked={formData.remember_me}
                onChange={handleChange}
                className="h-4 w-4 accent-[#71AC16]"
              />
              Remember Me
            </label>

            <button
              type="button"
              className="text-sm font-medium text-[#71AC16] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#71AC16] py-3 text-lg font-bold text-white shadow-md transition hover:scale-[1.01] hover:bg-[#5f9613] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Bottom */}
        <p className="mt-8 text-center text-white/70">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#71AC16] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;