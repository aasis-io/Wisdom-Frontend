import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Custom Label Component ---------- */
const Label = ({ children }) => (
  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
    {children}
  </label>
);

/* ---------- Custom Input Component ---------- */
const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
  />
);

/* ---------- Sign In Form ---------- */
export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          {/* Header */}
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>

          {/* Form */}
          <form>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <Label>
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="info@gmail.com" />
              </div>

              {/* Password */}
              <div>
                <Label>
                  Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute -translate-y-1/2 top-1/2 right-4 text-gray-500 dark:text-gray-400"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <Link
                  to="/reset-password"
                  className="text-sm text-brand-500 hover:text-gray-600 dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 font-medium text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
