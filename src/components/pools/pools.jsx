import { useEffect, useState } from "react";
import style from "./pools.module.scss";
import { PoolHeader } from "../poolHeader/index";
import { ListItem } from "../listItem/index";
import { GridItem } from "../gridItem/index";

export const Pools = () => {
  const [view, setView] = useState("list");
  const [filterOption, setFilterOption] = useState("active");
  const [pools, setPools] = useState([]);

  // temporary data
  let poolData = [
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
      name: "Salina Jones",
      twHandle: "@salil-naik",
      tags: ["Open Borrow", "Collecting"],
      borrowRate: 11, //in percentage
      borrowing: 10000, //in tokens
      token: "matic",
      collateral: 20, //in percentage
      progress: 45, // in tokens
      status: "active",
      activePools: [
        { token: "matic" },
        { token: "dot" },
        { token: "eth" },
        { token: "usdt" },
        { token: "eth" },
        { token: "usdt" },
      ],
    },

    {
      id: 121,
      name: "Elizabeth Taylor",
      twHandle: "@jonas-williams",
      tags: ["closed"],
      borrowRate: 11,
      borrowing: 5126,
      token: "USDT",
      collateral: 17,
      progress: 90,
      status: "closed",
    },
    {
      id: 122,
      name: "Alfred Johnson",
      twHandle: "@alfred-johnson",
      tags: ["collecting"],
      borrowRate: 15,
      borrowing: 6754,
      token: "SHIB",
      collateral: 27,
      progress: 50,
      status: "active",
      activePools: [
        { token: "RUNE" },
        { token: "MANA" },
        { token: "DAI" },
        { token: "FTT" },
      ],
    },
    {
      id: 123,
      name: "Jhon Smith",
      twHandle: "@john-smith",
      tags: ["closed"],
      borrowRate: 13,
      borrowing: 75640,
      token: "USDC",
      collateral: 25,
      progress: 30,
      status: "closed",
    },
    {
      id: 124,
      name: "",
      twHandle: "@jennifer-miller",
      tags: ["Open Borrow", "collecting"],
      borrowRate: 14,
      borrowing: 60000,
      token: "UNI",
      collateral: 20,
      progress: 70,
      status: "active",
      activePools: [
        { token: "SHIB" },
        { token: "UNI" },
        { token: "AMP" },
        { token: "ENJ" },
        { token: "BTT" },
        { token: "COMP" },
        { token: "USDC" },
      ],
    },
    {
      id: 125,
      name: "Salina jones",
      twHandle: "@salina-jones",
      tags: ["Open Borrow", "closed"],
      borrowRate: 18,
      borrowing: 45000,
      token: "LINK",
      collateral: 30,
      progress: 55,
      status: "closed",
    },
    {
      id: 126,
      name: "Salil Naik",
      twHandle: "@william-davis",
      tags: [],
      borrowRate: 19,
      borrowing: 5500,
      token: "WBTC",
      collateral: 18,
      progress: 65,
      status: "active",
      activePools: [{ token: "NEXO" }, { token: "REV" }, { token: "TUSD" }],
    },
    {
      id: 127,
      name: "Betty Allen",
      twHandle: "@robert-rodriguez",
      tags: ["Open Borrow", "closed"],
      borrowRate: 12,
      borrowing: 7550,
      token: "BUSD",
      collateral: 16,
      progress: 30,
      status: "closed",
    },
    {
      id: 128,
      name: "Susan Harris",
      twHandle: "@james-wilson",
      tags: ["collecting"],
      borrowRate: 15,
      borrowing: 80000,
      token: "AXS",
      collateral: 28,
      progress: 80,
      status: "active",
    },
    {
      id: 129,
      name: "Karen Walker",
      twHandle: "@mary-thomas",
      tags: ["Open Borrow"],
      borrowRate: 16,
      borrowing: 20000,
      token: "FTT",
      collateral: 23,
      progress: 45,
      status: "activ",
    },
    {
      id: 130,
      name: "Elizabeth Taylor",
      twHandle: "@elizabeth-taylor",
      tags: ["Open Borrow", "closed"],
      borrowRate: 19,
      borrowing: 68000,
      token: "DAI",
      collateral: 27,
      progress: 10,
      status: "closed",
      activePools: [
        { token: "BNT" },
        { token: "SKL" },
        { token: "RAY" },
        { token: "NU" },
        { token: "WIN" },
      ],
    },
    {
      id: 131,
      name: "Ritik Dutta",
      twHandle: "@joseph-jackson",
      tags: ["Open Borrow", "collecting"],
      borrowRate: 20,
      borrowing: 57600,
      token: "BTCB",
      collateral: 17,
      progress: 95,
      status: "active",
    },
    {
      id: 132,
      name: "Susan Harris",
      twHandle: "@susan-harris",
      tags: ["closed"],
      borrowRate: 16,
      borrowing: 17000,
      token: "CRO",
      collateral: 21,
      progress: 30000,
      status: "closed",
    },
    {
      id: 133,
      name: "Salil Naik",
      twHandle: "@anthony-lewis",
      tags: ["Open Borrow", "closed"],
      borrowRate: 12,
      borrowing: 25000,
      token: "GRT",
      collateral: 22,
      progress: 70,
      status: "closed",
    },
    {
      id: 134,
      name: "Karen Walker",
      twHandle: "@karen-walker",
      tags: [],
      borrowRate: 13,
      borrowing: 45000,
      token: "CAKE",
      collateral: 27,
      progress: 70,
      status: "active",
    },
    {
      id: 135,
      name: "Betty Allen",
      twHandle: "@betty-allen",
      tags: ["Open Borrow"],
      borrowRate: 16,
      borrowing: 35000,
      token: "AAVE",
      collateral: 24,
      progress: 80,
      status: "active",
    },
    {
      id: 136,
      name: "Salina Jones",
      twHandle: "@michael-wright",
      tags: ["Open Borrow"],
      borrowRate: 13,
      borrowing: 90000,
      token: "RUNE",
      collateral: 25,
      progress: 50,
      status: "active",
    },
    {
      id: 137,
      name: "Salil Naik",
      twHandle: "@nancy-scott",
      tags: ["Open Borrow"],
      borrowRate: 19,
      borrowing: 30500,
      token: "QNT",
      collateral: 28,
      progress: 20,
      status: "active",
    },
    {
      id: 138,
      name: "Alfred Johnson",
      twHandle: "@david-hill",
      tags: ["Open Borrow", "closed"],
      borrowRate: 12,
      borrowing: 65100,
      token: "LEO",
      collateral: 19,
      progress: 20,
      status: "closed",
    },
    {
      id: 139,
      name: "Charles Baker",
      twHandle: "@charles-baker",
      tags: [],
      borrowRate: 20,
      borrowing: 27000,
      token: "CHZ",
      collateral: 16,
      progress: 36,
      status: "closed",
    },
    {
      id: 140,
      name: "Elizabeth Taylor",
      twHandle: "@sandra-gomez",
      tags: ["Open Borrow"],
      borrowRate: 15,
      borrowing: 28000,
      token: "BTT",
      collateral: 18,
      progress: 65,
      status: "active",
    },
  ];

  useEffect(() => {
    filteredPools();
  }, [filterOption]);

  //   filtering the list data as per the filter options
  const filteredPools = () => {
    let filteredData;
    if (filterOption === "all pools") {
      filteredData = poolData;
    } else if (filterOption == "collecting") {
      filteredData = poolData.filter((pool) =>
        pool.tags.find(
          (item) => item.toLowerCase() === filterOption.toLowerCase()
        )
      );
    } else {
      filteredData = poolData.filter((pool) => pool.status === filterOption);
    }

    setPools(filteredData);
  };

  return (
    <div className={style.pools}>
      <h2 className="heading-2">Pools</h2>
      <div className={style["pools__container"]}>
        <PoolHeader
          view={view}
          changeView={(val) => setView(val)}
          filter={filterOption}
          changeFilter={(val) => setFilterOption(val)}
          tabs={["active", "collecting", "closed", "all pools"]}
        />
        {/* header for list view */}
        {view === "list" && (
          <div className={style.listHeader}>
            <div className="col-3">Borrower</div>
            <div className="col-6 d-flex align-items-center">
              <Param>Borrow Rate</Param>
              <Param>Borrowing</Param>
              <Param>Locked Collateral</Param>
              <Param>Collection progress</Param>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <span style={{ width: "195px" }}>Other Active Pools</span>
            </div>
          </div>
        )}

        {/* list view */}
        {view === "list" &&
          pools.map((item) => {
            return <ListItem pool={item} key={item.id} />;
          })}

        {/* grid view */}
        {view === "grid" && (
          <div className={`row px-4 mt-4 ${style.equal}`} >
            {pools.map((item) => {
              return (
                <div className="col-4 mb-4" key={item.id}>
                  <GridItem pool={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Param = ({ children }) => {
  return <span className={style["pool-param"]}>{children}</span>;
};
