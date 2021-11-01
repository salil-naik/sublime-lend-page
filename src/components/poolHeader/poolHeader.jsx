import style from "./pool-header.module.scss";

// icons
import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as GridIcon } from "../../assets/icons/grid.svg";

export const PoolHeader = ({
  view,
  changeView,
  filter,
  changeFilter,
  tabs,
}) => {
  return (
    <div className={style["pool-header"]}>
      <div>
        {tabs.map((item) => {
          return (
            <span
              className={`${style.tab} ${filter === item ? style.active : ""}`}
              key={item}
              onClick={() => changeFilter(item)}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className={style.iconsContainer}>
        <div
          className={`${style.iconBtn} ${style.small} ${
            view === "grid" ? style.active : ""
          }`}
          onClick={() => changeView("grid")}
        >
          <GridIcon />
        </div>

        <div
          className={`${style.iconBtn} ${view === "list" ? style.active : ""}`}
          onClick={() => changeView("list")}
        >
          <ListIcon />
        </div>
      </div>
    </div>
  );
};
