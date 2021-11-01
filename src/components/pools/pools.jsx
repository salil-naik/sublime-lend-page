import { useState } from "react";
import style from "./pools.module.scss";
import { PoolHeader } from "../poolHeader/index";

export const Pools = () => {
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("active");

  return (
    <div className={style.pools}>
      <h2 className="heading-2">Pools</h2>
      <div className={style["pools__container"]}>
        <PoolHeader
          view={view}
          changeView={(val) => setView(val)}
          filter={filter}
          changeFilter={(val) => setFilter(val)}
          tabs={['active', 'collecting', 'closed', 'all pools']}
        />
      </div>
    </div>
  );
};
