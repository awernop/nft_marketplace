import { Button } from "@/shared/Button/Button";
import eye from "../../img/buttons/Eye.svg";
import { Posts } from "@/widgets/Posts/Posts";
import asset from "../../assets/posts";

import style from "./discover.module.scss";

export const Discover = () =>{
    return(
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.text}>
                    <h2>Discover More NFTs</h2>
                    <span>Explore new trending NFTs</span>
                </div>
                <Button type={'line'} onClick={() => console.log('help')} src = {eye}>See All</Button>
            </div>
            <div className={style.cards}>
                {asset.map((item) => {
                    return item.id <= 3 ? <Posts key={item.id} {...item}/> : null
                })}
            </div>
        </div>
    )
}