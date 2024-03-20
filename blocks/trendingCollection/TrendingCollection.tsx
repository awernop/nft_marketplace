import { TrendCollect } from "@/widgets/TrendCollect/TrendCollect";
import asset from "../../assets/trendingCollection";

import style from "./trendingCollection.module.scss";

export const TrendingCollection = () =>{
    return(
        <div className={style.main}>
            <div className={style.title}>
                <h2>Trending Collection</h2>
                <span>Checkout our weekly 
                    updated trending collection.
                </span>
            </div>
            <div className={style.line}>
            {asset.map((item) => {
                return <TrendCollect key={item.id} {...item} />
            })}
            </div>
        </div>
    )
}