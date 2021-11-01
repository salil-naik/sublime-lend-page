import { useEffect, useState } from "react";
import style from "./active-pools.module.scss";

export const ActivePools = ({ pools, name }) => {
  const [tokens, setTokens] = useState([]);

  //   if the number of pools exceed 4, show 3 and hide the rest.
  useEffect(() => {
    let len = pools.length;
    if (len > 4) {
      let tknArr = pools.slice(0, 3);
      setTokens(tknArr);
    } else {
      setTokens(pools);
    }
  },[]);
  
  //   checks if the image exists in the databse.
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
    <div className={style.container}>
      {tokens.map((item, index) => {
        //   if image url is broken, show 1st character of the token.
        if (fetchImage(name)) {
          return <img src={fetchImage(name)} alt="avatar" key={index} className={style.token} />;
        } else {
          return (
            <div key={`${index}-no-img`} className={style.token}>
              {item.token[0]}
            </div>
          );
        }
      })}
      {/* show the number of hidden tokens */}
      {pools.length > 4 && (
        <div className={`${style.token} ${style.count}`}>
          +{pools.length - 3}
        </div>
      )}
    </div>
  );
};
