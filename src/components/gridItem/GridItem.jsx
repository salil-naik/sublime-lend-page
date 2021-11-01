import style from "./grid-item.module.scss";

import { ActivePools } from "../activePools/index";

export const GridItem = ({ pool }) => {
  const {
    id,
    name,
    twHandle,
    tags,
    borrowRate,
    borrowing,
    token,
    collateral,
    progress,
    status,
    activePools,
  } = pool;

  //   calculates the tokens already collected (as per the % provided)
  let collectedTokens = () => {
    return (progress * borrowing) / 100;
  };

  //   returns false if the image is unavailable or url is broken
  let fetchImage = (name) => {
    try {
      return require(`../../assets/avatar/${formattedName(name)}.png`).default;
    } catch (err) {
      return false;
    }
  };

  const formattedName = (name) => {
    return name.split(" ").join("-").toLowerCase();
  };

  return (
    <div className={style.grid}>
      <div className="d-flex">
        {/* show the first character of the name if avatar isn't available */}
        {fetchImage(name) ? (
          <img
            src={fetchImage(name)}
            alt="avatar"
            className={style["grid__avatar"]}
          />
        ) : (
          <div className={style["grid__avatar"]}>{name ? name[0] : "A"}</div>
        )}

        <div className={style["grid__details"]}>
          <p className={style.accountName}>{name ? name : `Anonymous#${id}`}</p>
          {twHandle && <p className={style.twHandle}>{twHandle}</p>}
        </div>
      </div>

      <div className="d-flex justify-content-between my-2 align-items-center">
        {tags.length > 0 && (
          <div className={`${style.tagContainer}`}>
            {tags.map((tag) => {
              return (
                <span className={style.tag} key={tag}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}
        {activePools && (
          <div>
            <p className={style.activePoolText}>Other active pools</p>
            <ActivePools pools={activePools} name={name} />
          </div>
        )}
      </div>
      <div>
        <Param>
          <span>Borrow Rate</span> <span>{borrowRate}%</span>
        </Param>
        <Param>
          <span>Borrowing</span>{" "}
          <span>
            {borrowing} <span className={style.token}>{token}</span>
          </span>
        </Param>
        <Param>
          <span>Locked Collateral</span> <span>{collateral}%</span>
        </Param>
        <Param>
          <span>Collection progress</span>
          <span>
            {progress}% ({collectedTokens(progress)}{" "}
            <span className={style.token}>{token}</span>)
          </span>
        </Param>
      </div>

      <a href="#salil" className={`btn btn-light ${style.btnBlock}`}>
        Lend
      </a>
    </div>
  );
};

const Param = ({ children }) => {
  return <div className={style["pool-param"]}>{children}</div>;
};
