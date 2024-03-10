import { FaSearch } from "react-icons/fa";
import plane from "../../assets/icons/plane.svg";
import dots from "../../assets/icons/dots.svg";
import sort from "../../assets/icons/sort.svg";

const users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Online",
    id: 1,
  },
  {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Offline",
    id: 2,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Online",
    id: 1,
  },
  {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Offline",
    id: 2,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Online",
    id: 1,
  },
  {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Offline",
    id: 2,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Online",
    id: 1,
  },
  {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Offline",
    id: 2,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Online",
    id: 1,
  },
  {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "08012345678",
    bus: "03",
    date: "1 Jan, 2024",
    status: "Offline",
    id: 2,
  },
];
export default function Index() {
  return (
    <main className="w-full border border-[#E6EDFF] border-opacity-50 rounded-xl p-5">
      <div className="flex justify-between items-center px-5 py-3">
        <b className="text-xl font-medium">Drivers</b>
        <label className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-10 h-10 border bg-inherit placeholder:text-[#7C7C7C] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <FaSearch className="absolute font-light text-primary left-3 top-1/2 -translate-y-1/2" />
        </label>
      </div>
      <button className="flex gap-2 items-center px-10 h-14 bg-primary text-white rounded">
        <img src={plane} alt="" className="object-contain" />
        <span className="text-sm">Active</span>
      </button>

      <div className="py-2 text-dark overflow-x-scroll snap">
        <table className="table-fixed md:table-auto lato  border-collapse font-[400] w-full">
          <thead>
            <tr className="font-[600] border-b border-[#E6EDFF] text-center align-middle overflow-x-scroll snap min-w-fit">
              <td className="py-5 w-[70px] md:w-[unset] text-center align-middle">
                Name
              </td>
              <td className="py-5 w-[150px] md:w-[unset] text-center align-middle">
                Email
              </td>
              <td className="py-5 w-[100px] md:w-[unset] text-center align-middle">
                Phone Number
              </td>
              <td className="py-5 w-[100px] md:w-[unset] text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Bus
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-[100px] md:w-[unset] text-center align-middle">
                <span className="flex gap-2 items-center justify-center">
                  Date Created
                  <img src={sort} alt="" className="object-contain" />
                </span>
              </td>
              <td className="py-5 w-[120px] md:w-[unset] text-center align-middle">
                Status
              </td>
              <td className="py-5 w-[120px] md:w-[unset] text-center align-middle">
                Actions
              </td>
            </tr>
          </thead>
          <tbody className="font-[400]">
            {users.map((user, index) => (
              <tr className="odd:bg-[#F4F4F4] border-b border-[#E6EDFF]" key={index}>
                <td className="py-5 text-center align-middle">{user.name}</td>
                <td className="py-5 text-center align-middle">
                  <span>{user.email}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <span>{user.phone}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <span>{user.bus}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  <span>{user.date}</span>
                </td>
                <td className="py-5 text-center align-middle">
                  {
                    <span
                      className={`px-3 py-1 rounded ${
                        user.status === "Online"
                          ? "bg-[#D4EFD4] text-[#008000]"
                          : "bg-[#DC251F33] text-[#DC251F]"
                      }`}
                    >
                      {user.status}
                    </span>
                  }
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
    </main>
  );
}
