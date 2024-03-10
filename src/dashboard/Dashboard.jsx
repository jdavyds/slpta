import { Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-d.png";
import { navLinks } from "./Navlinks";
import { FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import SideBarButton from "../utils/SidebarButton";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";
import Drop from "../utils/Drop";
import profile from "../assets/icons/profile.svg";
import logout from "../assets/icons/logout.svg";
import settings from "../assets/icons/5a.png";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <main className="md:grid grid-cols-[1fr_4fr] h-screen p-3 w-full">
      <aside
        className={`${
          open ? " left-0 top-0 " : " left-[-900%] top-0"
        } fixed md:static  z-[999999999] bg-[#F8F2FF] rounded-xl transition-all duration-1000 ease-in-out overflow-y-scroll snap w-3/4 md:w-full py-16 h-full flex flex-col gap-5 md:gap-10`}
      >
        <div
          className="md:hidden absolute top-3 right-3"
          onClick={() => setOpen(!open)}
        >
          <FaTimes className="text-xl" />
        </div>
        <figure className="px-5 md:px-10">
          <img src={logo} alt="" className="object-contain flex self-start" />
        </figure>
        <ul className="flex flex-col gap-5 w-full">
          {navLinks.map((link, index) => (
            <SideBarButton
              key={index}
              name={link?.name}
              icon1={link?.icon1}
              icon2={link?.icon2}
              dropdown={link?.dropdown}
              link={link?.path}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </ul>
      </aside>
      <section className="overflow-y-scroll snap min-h-screen w-full">
        <header className="px-5 md:pl-10 md:pr-20 py-2 md:py-4 flex justify-end items-center min-h-fit z-10 gap-5 md:gap-10">
          <div className="md:hidden mr-auto" onClick={() => setOpen(!open)}>
            <FaBars className="text-xl" />
          </div>
          <Drop
            Main={() => (
              <img src={bell} alt="" className="object-contain h-8 w-8" />
            )}
            Dropdown={() => (
              <div className="text-xs bg-white z-10 mt-2g rounded-xl shadow-[0px_2px_16px_0px_rgba(17,24,39,0.08)] flex flex-col divide-y">
                <p className="py-4 px-4 whitespace-nowrap">
                  A request was submitted for the approval of...
                </p>
                <p className="py-4 px-4 whitespace-nowrap">
                  A request was submitted for the approval of...
                </p>
                <p className="py-4 px-4 whitespace-nowrap">
                  A request was submitted for the approval of...
                </p>
                <p className="py-4 px-4 whitespace-nowrap">
                  A request was submitted for the approval of...
                </p>
              </div>
            )}
          />
          <label className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-10 h-10 border bg-inherit placeholder:text-[#7C7C7C] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            />
            <FaSearch className="absolute font-light text-primary left-3 top-1/2 -translate-y-1/2" />
          </label>
          <Drop
            Main={() => (
              <div className="flex gap-3 items-center ">
                <img src={user} alt="" className="object-contain" />
                <span className="hidden md:block">Demo Admin</span>
                <FaChevronDown className="hidden md:block" />
              </div>
            )}
            Dropdown={() => (
              <div className="text-xs bg-white rounded-xl shadow-[0px_2px_16px_0px_rgba(17,24,39,0.08)] flex flex-col divide-y">
                <nav className="flex items-center gap-2 py-4 px-4 pr-14">
                  <img src={profile} alt="" className="object-contain" />
                  <span>Profile</span>
                </nav>
                <nav className="flex items-center gap-2 py-4 px-4 pr-14">
                  <img src={settings} alt="" className="object-contain" />
                  <span>Settings</span>
                </nav>
                <nav className="flex items-center gap-2 py-4 px-4 pr-14 text-red">
                  <img src={logout} alt="" className="object-contain" />
                  <span>Logout</span>
                </nav>
              </div>
            )}
          />
        </header>
        <section className={`p-5 md:p-10 overflow-y-scroll snap`}>
          <Outlet />
        </section>
      </section>
    </main>
  );
}
