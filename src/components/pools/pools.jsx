import { useEffect, useState } from "react";
import style from "./pools.module.scss";
import { PoolHeader } from "../poolHeader/index";
import { ListItem } from "../listItem/index";

export const Pools = () => {
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("active");
  const [pools, setPools] = useState([]);

  // temporary data
  let poolData = [
    {
      id: 4533,
      name: "",
      twHandle: "@salil-naik",
      tags: ["Open Borrow"],
      borrowRate: 11,
      borrowing: 100,
      token: "matic",
      collateral: 20,
      progress: 90,
      status: "active",
    },
    {
      id: 433,
      name: "Salil Naik",
      twHandle: "@salil-naik",
      tags: ["Open Borrow", "Collecting"],
      borrowRate: 11,
      borrowing: 10000,
      token: "matic",
      collateral: 20,
      progress: 45,
      status: "active",
    },
    {
      id: 45,
      name: "Raj Divkar",
      twHandle: "@salil-naik",
      tags: ["Open Borrow", "Collecting"],
      borrowRate: 11, //in percentage
      borrowing: 10000, //in tokens
      token: "matic",
      collateral: 20, //in percentage
      progress: 45, // in tokens
      status: "active",
    },
  ];

  useEffect(() => {
    setPools(poolData);
  }, []);

  return (
    <div className={style.pools}>
      <h2 className="heading-2">Pools</h2>
      <div className={style["pools__container"]}>
        <PoolHeader
          view={view}
          changeView={(val) => setView(val)}
          filter={filter}
          changeFilter={(val) => setFilter(val)}
          tabs={["active", "collecting", "closed", "all pools"]}
        />
        {pools.map((item) => {
          return <ListItem pool={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
