import d1 from "../../assets/icons/d1.svg";
import d1b from "../../assets/icons/d1b.svg";
import d2 from "../../assets/icons/d2.svg";
import d2b from "../../assets/icons/d2b.svg";
import d3 from "../../assets/icons/d3.svg";
import d3b from "../../assets/icons/d3b.svg";
import d4 from "../../assets/icons/d4.svg";
import d4b from "../../assets/icons/d4b.svg";
import Analytics from "./Analytics";
import Routes from "./Routes";
import Trips from "./Trips";

export default function Index() {
  return (
    <main className="h-full flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col md:grid grid-cols-4 gap-5 md:gap-10">
        <Total
          name={"Total Drivers"}
          total={"100,123"}
          icon1={d1}
          icon2={d1b}
          bg={"#AFF3F7"}
          color={"#00575C"}
          percent={"3.5"}
          rate={"10,000/mos"}
        />
        <Total
          name={"Total Routes"}
          total={"1,023"}
          icon1={d2}
          icon2={d2b}
          bg={"#EDDDFF"}
          color={"#370D66"}
          percent={"3.5"}
          rate={"200/mos"}
        />
        <Total
          name={"Total Stops"}
          total={"20,123"}
          icon1={d3}
          icon2={d3b}
          bg={"#FBCEDC"}
          color={"#CB1F52"}
          percent={"3.5"}
          rate={"2,000/mos"}
        />
        <Total
          name={"Total Trips"}
          total={"12,123"}
          icon1={d4}
          icon2={d4b}
          bg={"#F8F2FF"}
          color={"#370D66"}
          percent={"3.5"}
          rate={"1,000/mos"}
        />
      </div>
      <Analytics />
      <div className="flex flex-col md:grid grid-cols-2 gap-10">
        <Trips />
        <Routes />
      </div>
    </main>
  );
}

const Total = ({ name, total, icon1, icon2, bg, color, percent, rate }) => {
  return (
    <div
      className="flex flex-col p-5 gap-5 md:gap-8 rounded-3xl w-full text-xs"
      style={{ backgroundColor: bg, color: color }}
    >
      <p className="flex justify-between">
        <img src={icon1} alt="" className="object-contain" />
        <span className="">{rate}</span>
      </p>
      <div className="flex justify-between items-end">
        <p className="flex flex-col gap-1">
          <span className="">{name}</span>
          <b className="text-black text-2xl font-medium">{total}</b>
        </p>
        <p className="flex items-end gap-2">
          <img src={icon2} alt="" className="object-contain" />
          <span className="">{percent}%</span>
        </p>
      </div>
    </div>
  );
};
