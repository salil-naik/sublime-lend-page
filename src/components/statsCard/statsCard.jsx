import style from "./stats.module.scss";
import { ReactComponent as PercentageIcon } from "../../assets/icons/percentage.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as DollarIcon } from "../../assets/icons/dollar.svg";

export const StatsCard = ({ item }) => {
  return (
    <div className={style.card}>
      <div className={`${style["card__icon"]} ${style[item.id]}`}>
        {item.id === "return-rate" && <PercentageIcon />}
        {item.id === "amount-lent" && <DollarIcon />}
        {item.id === "roi" && <CalendarIcon />}
      </div>
      <div className={style["card__details"]}>
        <p className={style.value}>{item.value}</p>
        <p className={style.desc}>{item.desc}</p>
      </div>
    </div>
  );
};
