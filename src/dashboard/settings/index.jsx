import { useState } from "react";
import NumberInput from "../../utils/NumberInput";

export default function Index() {
  const [rate, setRate] = useState(0);
  const [commission, setCommission] = useState(0);
  const [days, setDays] = useState(0);
  const [stops, setStops] = useState(0);
  const [distance, setDistance] = useState(0);

  return (
    <main className="w-full border border-[#E6EDFF] border-opacity-50 rounded-xl p-5">
      <div className="flex justify-between items-center px-5 py-3">
        <b className="text-2xl md:text-3xl font-medium">Settings</b>
      </div>

      <form className="p-5 md:p-20 flex flex-col gap-10">
        <div className="flex flex-col md:grid grid-cols-3 gap-10 w-full">
          <NumberInput
            name="Rate per KM"
            placeholder="Enter the rate per KM"
            value={rate}
            setValue={setRate}
          />
          <NumberInput
            name="Commission (1%)"
            placeholder="Enter the commission percentage"
            value={commission}
            setValue={setCommission}
          />
          <span></span>
          <NumberInput
            name="Publish trip in future (days)"
            placeholder="Enter no. of days in future to publish trips"
            value={days}
            setValue={setDays}
          />
          <NumberInput
            name="Max. distance to stop (km)"
            placeholder="Enter max distance to stop to be included"
            value={stops}
            setValue={setStops}
          />
          <NumberInput
            name="Distance to stop mark arrived by the driver"
            placeholder="Enter distance to stop mark arrived..."
            value={distance}
            setValue={setDistance}
          />
        </div>
        <button
          className={`w-fit h-14 font-medium text-xl text-white rounded flex items-center justify-center px-12 gap-2 transition-all ease-in-out duration-1000 bg-primary`}
        >
          Save
        </button>
      </form>
    </main>
  );
}
