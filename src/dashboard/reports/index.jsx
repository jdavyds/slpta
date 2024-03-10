import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import r1a from "../../assets/icons/r1a.svg";
import r1b from "../../assets/icons/r1b.svg";
import r2a from "../../assets/icons/r2a.svg";
import r2b from "../../assets/icons/r2b.svg";
import r3a from "../../assets/icons/r3a.svg";
import r3b from "../../assets/icons/r3b.svg";
import sort from "../../assets/icons/sort.svg";
import { reports } from "../../utils/Reports";

export default function Index() {
  const [active, setActive] = useState("Not Started");
  const cases = [
    {
      name: "Not Started",
      icon1: r1a,
      icon2: r1b,
    },
    {
      name: "On Route",
      icon1: r2a,
      icon2: r2b,
    },
    {
      name: "Completed",
      icon1: r3a,
      icon2: r3b,
    },
  ];

  return (
    <main className="w-full border border-[#E6EDFF] border-opacity-50 rounded-xl p-3 md:p-5">
      <div className="flex justify-between flex-wrap items-center md:px-5 py-3 gap-3">
        <b className="md:text-xl font-medium">Time Table</b>
        <label className="relative md:w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="px-10 h-10 w-full border bg-inherit placeholder:text-[#7C7C7C] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <FaSearch className="absolute font-light text-primary left-3 top-1/2 -translate-y-1/2" />
        </label>
      </div>
      <nav className="flex flex-wrap items-center gap-3 rounded border border-opacity-20 w-fit text-sm">
        {cases.map((item, index) => (
          <button
            key={index}
            className={`flex gap-2 items-center px-10 h-14 rounded transition-all ease-in-out duration-200 ${
              active === item?.name ? "bg-primary text-white" : ""
            }`}
            onClick={() => setActive(item?.name)}
          >
            <img
              src={active === item?.name ? item.icon1 : item.icon2}
              alt=""
              className="object-contain"
            />
            <span className="text-sm">{item?.name}</span>
          </button>
        ))}
      </nav>

      <div className="py-2 text-dark overflow-x-scroll snap">
        <table className="table-fixed md:table-auto lato  border-collapse font-[400] w-full">
          <thead>
            <tr className="font-[600] border-b border-[#E6EDFF] text-center align-middle overflow-x-scroll snap min-w-fit">
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Planned date
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Driver
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Bus
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Route
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Planned Start
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Planned End
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-auto text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Reservation
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              {active !== "Not Started" && (
                <td className="py-5 w-auto text-center align-middle">
                  <span className="flex gap-2 items-center justify-center">
                    Started at
                    <img src={sort} alt="" className="object-contain" />
                  </span>
                </td>
              )}
              {active === "Completed" && (
                <td className="py-5 w-auto text-center align-middle">
                  <span className="flex gap-2 items-center justify-center">
                    Ended at
                    <img src={sort} alt="" className="object-contain" />
                  </span>
                </td>
              )}
            </tr>
          </thead>
          <tbody className="font-[400]">
            {reports
              .filter((report) => report.type === active)
              .map((report, index) => (
                <tr
                  className="odd:bg-[#F4F4F4] border-b border-[#E6EDFF]"
                  key={index}
                >
                  {Object.entries(report)
                    .filter(([key]) => key !== "type")
                    .map(([key, value], i) => (
                      <td
                        className="py-5 text-center align-middle"
                        key={i}
                        name={key}
                      >
                        {value}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full h-2 rounded-2xl bg-[#E5E7EB]"></div>
        <div className="flex justify-between text-[#6B7280]">
          <div className="hidden md:flex gap-4 items-center my-7">
            1 - 13 of 2416 results
          </div>
          <div className="flex gap-5 items-center py-2">
            <span>1 of 186 pages</span>
            <button className="flex items-center gap-2 ">Previous</button>
            <button className="flex items-center gap-2">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
}
