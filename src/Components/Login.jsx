import "../CSS/Login.css";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ msg: "", state: false });
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    setTimeout(() => {
      return setError({ msg: "", state: false });
    }, 5000);

    // Basic validation
    if (!email || !password) {
      setError({ msg: "Please fill in all fields.", state: true });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({ msg: "Please enter a valid email address.", state: true });
      return;
    }

    if (password.length < 6) {
      setError({ msg: "Incorrect Password", state: true });
      return;
    }

    // More validation if required

    setError("");

    // login logic
    navigate("/home");
    // Add more logic that you want
  };

  return (
    <>
      <div className="flex justify-center min-h-screen items-center py-4 bg-white font-poppins_Regular">
        <form className="form" onSubmit={handleSubmit}>
          {error.state && (
            <p className="mb-2 text-sm text-center text-red-500">{error.msg}</p>
          )}
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <MdAlternateEmail className="h-[20px] w-[20px]" />
            <input
              placeholder="Enter your Email"
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <HiOutlineLockClosed className="h-[20px] w-[20px]" />

            <input
              placeholder="Enter your Password"
              className="input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex-row item-center justify-center">
            <div className="flex gap-[6px]">
              <input type="checkbox" />
              <label className="mr-[2px]">Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button className="button-submit" type="submit">
            Sign In
          </button>

          <p className="p line">Or With</p>

          <div className="flex-row">
            <a className="btn google">
              <FcGoogle className="h-[20px] w-[20px]" />
              Google
            </a>
            <a className="btn apple">
              <FaApple className="h-[20px] w-[20px]" />
              Apple
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
