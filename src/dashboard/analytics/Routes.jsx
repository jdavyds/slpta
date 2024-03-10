import { useState } from "react";
import DropBtn from "../../utils/DropBtn";

export default function Routes() {
  const [state, setState] = useState("daily");

  return (
    <div className="w-full border border-[#D9D9D9] border-opacity-50 rounded-xl p-3 md:p-5">
      <div className="flex justify-between items-center md:px-5 py-3 gap-5">
        <b className="text-sm md:text-xl font-medium">Routes Overview</b>
        <DropBtn
          items={["monthly", "weekly", "daily"]}
          selected={state}
          setSelected={setState}
        />
      </div>
      <figure className="w-full h-[30vh]"></figure>
    </div>
  );
}
