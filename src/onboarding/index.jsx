import onboard1 from "../assets/onboard1.png";
import onboard2 from "../assets/onboard2.png";
import onboard3 from "../assets/onboard3.png";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Home() {
  const location = useLocation();

  const { pathname } = location;

  return (
    <main className="bg-[#F9F9F9] flex flex-col md:grid grid-cols-2 gap-10 py-5 px-5 min-h-[110vh]">
      <div className="w-full h-full md:px-10 flex justify-center">
        <div className="w-full flex flex-col gap-10 py-10">
          <img src={logo} alt="" className="object-contain mr-auto" />
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-[48px] font-[600] leading-tight text-primary">
              <b className="text-red font-[600] inline">Create </b>
              Your Account
            </h2>
            <p className="md:text-xl">
              {pathname === "/onboard/information" &&
                "Fill out this form to get started"}
              {pathname === "/onboard/upload" &&
                "Upload the required documents"}
              {pathname === "/onboard/password" && "Please create a password"}
            </p>
          </div>
          <div className="text-sm md:text-base">
            <Outlet />
          </div>
          <nav className="w-full mt-auto grid grid-cols-3 gap-5">
            <span className={`bg-primary h-2 w-full rounded-full flex`}></span>
            <span
              className={`${
                pathname === "/onboard/upload" ||
                pathname === "/onboard/password"
                  ? "bg-primary"
                  : "bg-[#D9D9D9]"
              }  h-2 w-full rounded-full flex`}
            ></span>
            <span
              className={`${
                pathname === "/onboard/password" ? "bg-primary" : "bg-[#D9D9D9]"
              } h-2 w-full rounded-full flex`}
            ></span>
          </nav>
        </div>
      </div>
      <figure className="w-full h-full relative">
        <img
          src={onboard1}
          alt=""
          loading="eager"
          className={`w-full h-full object-cover transition-all ease-in-out duration-1000 absolute top-0 left-0 rounded-3xl ${
            pathname === "/onboard/information" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={onboard2}
          alt=""
          loading="eager"
          className={`w-full h-full object-cover transition-all ease-in-out duration-1000 absolute top-0 left-0 rounded-3xl ${
            pathname === "/onboard/upload" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={onboard3}
          alt=""
          loading="eager"
          className={`w-full h-full object-cover transition-all ease-in-out duration-1000 absolute top-0 left-0 rounded-3xl ${
            pathname === "/onboard/password" ? "opacity-100" : "opacity-0"
          }`}
        />
      </figure>
    </main>
  );
}
