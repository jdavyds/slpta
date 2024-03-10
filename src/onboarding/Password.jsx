import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BtnPurpleGradient } from "../utils/Button";

function Register() {
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [state, setState] = useState({});

  return (
    <form className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Create Password</span>
        <div className="flex items-center gap-1 w-full relative">
          <input
            type={showP1 ? "text" : "password"}
            placeholder="xwyszxct56@"
            className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
            value={state.password}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowP1(!showP1);
            }}
            className="absolute right-3 z-10 text-lg"
          >
            {showP1 ? (
              <FaEyeSlash className="text-primary" />
            ) : (
              <FaEye className="text-primary" />
            )}
          </button>
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Create Password</span>
        <div className="flex items-center gap-1 w-full relative">
          <input
            type={showP2 ? "text" : "password"}
            placeholder="xwyszxct56@"
            className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
            value={state.confirm}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                confirm: e.target.value,
              }))
            }
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowP2(!showP2);
            }}
            className="absolute right-3 z-10 text-lg"
          >
            {showP2 ? (
              <FaEyeSlash className="text-primary" />
            ) : (
              <FaEye className="text-primary" />
            )}
          </button>
        </div>
      </label>
      <label className="flex gap-2 items-center">
        <input type="checkbox" className="h-7 w-7 bg-inherit" id="checkbox" />
        <span></span>
        <span className="font-medium">
          I agree to the <span className="text-primary">Terms of Service</span>{" "}
          and <span className="text-primary">Privacy Policy</span>
        </span>
      </label>
      <BtnPurpleGradient
        name="Continue"
        slug="/dashboard/analytics"
        style="mt-10"
      />
    </form>
  );
}

export default Register;
