import { useState } from "react";
import DropBtn from "../../utils/DropBtn";

export default function Analytics() {
  const [state, setState] = useState("daily");
  const [active, setActive] = useState("Customers");
  const cases = ["Customers", "Drivers", "Routes", "Stops", "Trips"];

  return (
    <div className="w-full border border-[#D9D9D9] border-opacity-50 rounded-xl p-3 md:p-5">
      <div className="flex justify-between items-center md:px-5 py-3 flex-wrap gap-5">
        <b className="md:text-xl font-medium">Analytics</b>
        <nav className="flex items-center flex-wrap gap-3 rounded-lg p-1 border border-opacity-20 min-w-fit text-sm">
          {cases.map((item, index) => (
            <button
              key={index}
              className={`px-3 md:px-7 py-2 min-w-fit w-full rounded-lg flex items-center justify-center ${
                active === item ? "bg-[#F8F2FF]" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
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
