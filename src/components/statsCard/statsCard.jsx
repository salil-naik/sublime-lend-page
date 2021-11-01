import style from "./stats.module.scss";

export const StatsCard = ({item}) => {
    return (
        <div className={style.card}>
            <div className={style['card__icon']}></div>
            <div className={style['card__details']}>
                <p className={style.value}>{item.value}</p>
                <p className={style.desc}>{item.desc}</p>
            </div>
        </div>
    )
}