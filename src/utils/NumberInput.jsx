import up from "../assets/icons/up.svg";
import down from "../assets/icons/down.svg";

export default function NumberInput({ name, placeholder, value, setValue }) {
  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (value === 0) return;
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm md:text-base font-semibold">{name}</span>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder={placeholder}
          className="h-12 px-3 border-[0.5px] border-opacity-40 border-[#7C7C7C] w-full rounded bg-inherit outline-none"
        />
        <img
          src={up}
          alt="Increment"
          onClick={increment}
          className="absolute right-4 top-[5px] h-4 object-contain z-10"
        />
        <img
          src={down}
          alt="Decrement"
          onClick={decrement}
          className="absolute right-4 bottom-[5px] h-4 object-contain z-10"
        />
      </div>
    </label>
  );
}
