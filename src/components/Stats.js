import React, { useState } from "react";
import Heading2 from "@/components/Heading2";

function Stats() {
  const stats = ["22%", "84", "2x"];

  return (
    <div className="max-w-[1280px] ">
      <Heading2 className="text-white">
        Impact Metrics That Our Clients Feel
      </Heading2>

      <div className="flex items-start gap-4 p-5">
        {stats.map((item, key) => IndividualStat(key))}
        {/* <div
          className={`${active ? "w-[600px]" : "w-[300px]"} shadow-custom rounded-xl w-full p-5`}
        >
          <p
            className="text-6xl text-white font-extrabold"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            22%
          </p>
        </div>
        <div
          className={`${active ? "w-[600px]" : "w-[300px]"} shadow-custom rounded-xl w-full p-5`}
        >
          <p
            className="text-6xl text-white font-extrabold"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            22%
          </p>
        </div>
        <div
          className={`${active ? "w-[600px]" : "w-[300px]"} shadow-custom rounded-xl w-full p-5`}
        >
          <p
            className="text-6xl text-white font-extrabold"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            22%
          </p>
        </div> */}
      </div>
    </div>
  );
}

export const IndividualStat = (key) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${active ? "w-[600px]" : "w-[300px]"} shadow-custom rounded-xl w-full p-5`}
      key={key}
    >
      <p
        className="text-6xl text-white font-extrabold"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        22%
      </p>
    </div>
  );
};

export default Stats;
