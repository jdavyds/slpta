/* eslint-disable react/no-unescaped-entities */
import { BtnPurpleGradient } from "../utils/Button";

function Upload() {
  return (
    <form className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Driver's License</span>
        <div className="flex gap-1">
          <input
            type="text"
            disabled
            placeholder="Upload a copy of your driver’s license"
            className="h-12 px-3 bg-[#F4F4F4] text-[#757575] w-full rounded outline-none"
          />
          <button className="flex justify-center items-center bg-red font-semibold text-white outline-none rounded px-10 h-12 min-w-fit">
            Upload
          </button>
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Photo ID</span>
        <div className="flex gap-1">
          <input
            type="text"
            disabled
            placeholder="Upload a close up picture of your self"
            className="h-12 px-3 bg-[#F4F4F4] text-[#757575] w-full rounded outline-none"
          />
          <button className="flex justify-center items-center bg-red font-semibold text-white outline-none rounded px-10 h-12 min-w-fit">
            Upload
          </button>
        </div>
      </label>
      <BtnPurpleGradient
        name="Continue"
        slug="/onboard/password"
        style="mt-10"
      />
    </form>
  );
}

export default Upload;
