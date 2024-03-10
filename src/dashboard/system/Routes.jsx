import sort from "../../assets/icons/sort.svg";
import { FaSearch } from "react-icons/fa";
import dots from "../../assets/icons/dots.svg";
import plus from "../../assets/icons/plus.svg";
import { useState } from "react";
import Modal from "../../utils/Modal";
const routes = [
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
  {
    id: "01",
    name: "Route Name",
    stops: "20",
    created: "1 Jan, 2024",
  },
];

export default function Routes() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="w-full border border-[#E6EDFF] border-opacity-50 rounded-xl p-5 flex flex-col gap-5">
      <div className="flex justify-between items-center px-5 py-3">
        <b className="text-xl font-medium">Routes</b>
        <label className="relative md:w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="px-10 h-10 w-full border bg-inherit placeholder:text-[#7C7C7C] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <FaSearch className="absolute font-light text-primary left-3 top-1/2 -translate-y-1/2" />
        </label>
      </div>
      <button
        className="flex gap-2 items-center px-10 h-14 bg-primary text-white rounded ml-auto"
        onClick={() => setShowModal(true)}
      >
        <img src={plus} alt="" className="object-contain" />
        <span className="text-sm">Create New</span>
      </button>

      <div className="py-2 text-dark overflow-x-scroll snap">
        <table className="table-fixed md:table-auto lato  border-collapse font-[400] w-full">
          <thead>
            <tr className="font-[600] border-b border-[#E6EDFF] text-center align-middle overflow-x-scroll snap min-w-fit">
              <td className="py-5 w-[70px] md:w-[unset] text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  ID
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-[150px] md:w-[unset] text-center align-middle">
                Name
              </td>
              <td className="py-5 w-[120px] md:w-[unset] text-center align-middle">
                Stops
              </td>
              <td className="py-5 w-[100px] md:w-[unset] text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Created
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-[120px] md:w-[unset] text-center align-middle">
                Actions
              </td>
            </tr>
          </thead>
          <tbody className="font-[400]">
            {routes.map((route, index) => (
              <tr
                className="odd:bg-[#F4F4F4] border-b border-[#E6EDFF]"
                key={index}
              >
                <td className="py-5 text-center align-middle">{route.id}</td>
                <td className="py-5 text-center align-middle">
                  <span>{route.name}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <span>{route.stops}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <span>{route.created}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <button className="flex-col items-center text-center gap-1">
                    <img src={dots} alt="" />
                  </button>
                </td>
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
      {showModal && <Modal child={<Child setShowModal={setShowModal} />} />}
    </main>
  );
}

const Child = ({ setShowModal }) => {
  return (
    <div className="w-full h-full p-5 md:p-20 flex flex-col justify-center gap-5 md:gap-8">
      <h3 className="text-xl">Route Data</h3>
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Enter the route name</span>
        <input
          type="text"
          placeholder="Route name"
          className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
        />
      </label>
      <nav className="flex items-center gap-5 ml-auto">
        <button
          onClick={() => setShowModal(false)}
          className={`w-40 h-14 font-medium rounded flex items-center justify-center px-12 gap-2 transition-all ease-in-out duration-1000 bg-inherit border border-primary text-primary`}
        >
          Cancel
        </button>
        <button
          className={`w-40 h-14 font-medium text-white rounded flex items-center justify-center px-12 gap-2 transition-all ease-in-out duration-1000 bg-primary`}
        >
          OK
        </button>
      </nav>
    </div>
  );
};
