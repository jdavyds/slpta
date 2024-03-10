import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import arrow from "../assets/icons/more.svg";
import { motion, AnimatePresence } from "framer-motion";
// import { useMatch } from "react-router-dom";

const SideBarButton = (props) => {
  const [showDrop, setShowDrop] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  const handleClick = () => {
    setShowDrop(!showDrop);
  };

  return (
    <div className="w-full" onClick={props.onClick}>
      <div className="px-5">
        {props.dropdown ? (
          <button
            className={
              pathname.includes(`/dashboard/${props.link}`)
                ? "bg-primary text-white h-16 px-5 md:pl-8 rounded-2xl flex items-center gap-2 w-full transition-all ease-in-out duration-200"
                : "h-14 px-5 md:pl-8 flex items-center gap-2 w-full transition-all ease-in-out duration-200"
            }
          >
            <button
              className={`flex flex-col bg-inherit w-full`}
              onClick={handleClick}
            >
              <div className={`flex items-center gap-4 w-full`}>
                <img
                  src={
                    pathname.includes(`/dashboard/${props.link}`)
                      ? props.icon2
                      : props.icon1
                  }
                  alt="dashboardIcon"
                  className="transition-all ease-in-out duration-200 h-8 w-8"
                />
                <p className="text-lg md:text-xl">{props.name}</p>
                {props.dropdown && (
                  <img
                    className={`ml-auto transition-all ease-in-out duration-300 ${
                      showDrop && "rotate-90"
                    }`}
                    src={arrow}
                    alt="arrow"
                  />
                )}
              </div>
            </button>
          </button>
        ) : (
          <NavLink
            to={props.link}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-primary text-white h-16 px-5 md:pl-8 rounded-2xl flex items-center gap-2 w-full transition-all ease-in-out duration-200"
                : isPending
                ? "h-14 animate-pulse w-full bg-primary transition-all ease-in-out duration-200"
                : "h-14 px-5 md:pl-8 flex items-center gap-2 w-full transition-all ease-in-out duration-200"
            }
          >
            <button className={`flex flex-col bg-inherit w-full`}>
              <div className={`flex items-center gap-4 w-full`}>
                <img
                  src={
                    pathname.includes(`/dashboard/${props.link}`)
                      ? props.icon2
                      : props.icon1
                  }
                  alt="dashboardIcon"
                  className="transition-all ease-in-out duration-200 h-8 w-8"
                />
                <p className="text-lg md:text-xl">{props.name}</p>
              </div>
            </button>
          </NavLink>
        )}
      </div>
      <AnimatePresence>
        {props.dropdown && showDrop && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-left w-full bg-white gap-4 my-3 py-3 px-10"
          >
            {props.dropdown.map((drop, index) => (
              <NavLink
                to={drop.link}
                key={index}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary  w-full font-semibold"
                    : isPending
                    ? "animate-pulse w-full text-primary"
                    : "flex items-center w-full"
                }
              >
                {drop.name}
              </NavLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBarButton;
