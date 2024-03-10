import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function useOnHoverOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}

export default function DropBtn({ items, setSelected, selected }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeHoverMenu = () => {
    setOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <div className="w-32 h-fit font-medium relative" ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-inherit w-full border px-4 h-10 flex gap-2 items-center capitalize justify-between rounded-lg ${
          !selected ? "text-[#7C7C7C]" : ""
        }`}
      >
        {selected
          ? selected?.length > 10
            ? selected?.substring(0, 10) + "..."
            : selected
          : "Select item"}
        <BiChevronDown className={`${open && "rotate-180"} text-xl`} />
      </div>
      {open && (
        <ul
          className={`bg-inherit border w-32 rounded-lg overflow-y-auto absolute bottom-0 translate-y-full z-[999] `}
        >
          {items?.map((item) => (
            <li
              key={item}
              className={`p-3 py-2 text-sm hover:bg-black hover:text-white
            `}
              onClick={() => {
                if (item !== selected) {
                  setSelected(item);
                  setOpen(false);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
