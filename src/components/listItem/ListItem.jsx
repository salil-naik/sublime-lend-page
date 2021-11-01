import style from "./list-item.module.scss";

export const ListItem = ({ pool }) => {
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
  } = pool;

  let collectedTokens = () => {
    return (progress * borrowing) / 100;
  };

  let fetchImage = (name) => {
    try {
        return require(`../../assets/avatar/${formattedName(name)}.png`).default;
    } catch (err) {
      return false;
    }
  };

  const formattedName = (name) => {
    return name.split(' ').join('-').toLowerCase();
  }

  return (
    <div className={style.list}>
      <div className="col-3">
        <div className="d-flex align-items-center">
          {fetchImage(name) ? (
            <img
              src={fetchImage(name)}
              alt="avatar"
              className={style["list__avatar"]}
            />
          ) : (
            <div className={style["list__avatar"]}>{name?name[0]:'A'}</div>
          )}

          <div className={style["list__details"]}>
            <p className={style.accountName}>{name ? name: `Anonymous#${id}`}</p>
            <div className={style["tags-container"]}>
              {tags.map((tag) => {
                return <span className={style.tag} key={tag}>{tag}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex">
        <Param>{borrowRate}%</Param>
        <Param>
          {borrowing} <span className={style.token}>{token}</span>
        </Param>
        <Param>{collateral}%</Param>
        <Param className={style["pool-param"]}>
          {progress}% ({collectedTokens(progress)}{" "}
          <span className={style.token}>{token}</span>)
        </Param>
      </div>
      <div className="col-3 d-flex justify-content-end">
        <a href="#salil" className="btn btn-light">
          Lend
        </a>
      </div>
    </div>
  );
};

const Param = ({ children }) => {
  return <span className={style["pool-param"]}>{children}</span>;
};
