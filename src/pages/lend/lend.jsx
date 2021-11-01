import { useState, useEffect } from "react";
import style from "./lend.module.scss";

import { StatsCard } from "../../components/statsCard/index";
import { Pools } from "../../components/pools/index";

export const Lend = () => {
  const [stats, setStats] = useState([]);

  let statistics = [
    {
      id: "return-rate",
      value: "32%",
      desc: "Current return rate",
    },
    {
      id: "amount-lent",
      value: "$16,034",
      desc: "Total amount lent",
    },
    {
      id: "roi",
      value: "154.5",
      desc: "Weekly ROI",
    },
  ];

  useEffect(() => {
    setStats(statistics);
  }, []);

  return (
    <div className={style.lend}>
      <div className="container">
        <div className={style["stats-container"]}>
          <div className="row">
            <div className="col-12">
              <h1 className="heading-2">Lend</h1>
            </div>

            {stats.map((item) => {
              return (
                <div className="col-4" key={item.id}>
                  <StatsCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <Pools />
      </div>
    </div>
  );
};
