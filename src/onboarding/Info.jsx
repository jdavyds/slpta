import { useState } from "react";
import ng from "../assets/ng.png";
import drop from "../assets/drop.png";
import { BtnPurpleGradient } from "../utils/Button";

function Info() {
  const [state, setState] = useState({});
  return (
    <form className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Your Full Name</span>
        <input
          type="text"
          placeholder="John Doe"
          className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
          value={state.name}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Your Email</span>
        <input
          type="email"
          placeholder="Your Email Address"
          className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
          value={state.email}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Your Phone Number</span>
        <div className="flex gap-1">
          <button className="flex gap-2 items-center border-[0.5px] border-opacity-40 border-[#7C7C7C] outline-none bg-inherit px-6 h-12 min-w-fit">
            <img src={ng} alt="" className="w-5 h-5" />
            <img src={drop} alt="" className="" />
          </button>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
            value={state.phone}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
          />
        </div>
      </label>
      <div className="flex flex-col gap-5 md:grid grid-cols-[2fr_1fr]">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Your Home Address</span>
          <input
            type="text"
            placeholder="No 2, Aminu Kano Crescent"
            className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
            value={state.address}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                address: e.target.value,
              }))
            }
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Your State Of Residence</span>
          <div className="w-full relative flex items-center">
            <select
              value={state.state}
              className="h-12 px-3 bg-[#F4F4F4] w-full rounded outline-none"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  state: e.target.value,
                }))
              }
            >
              <option value="abuja">Abuja</option>
              <option value="lagos">Lagos</option>
              <option value="kano">Kano</option>
              <option value="rivers">Rivers</option>
            </select>
            <img src={drop} alt="" className="absolute right-4" />
          </div>
        </label>
      </div>
      <BtnPurpleGradient name="Continue" slug="/onboard/upload" style="mt-10" />
    </form>
  );
}

export default Info;
