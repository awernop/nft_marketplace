import { Button } from "@/shared/Button/Button";
import asset from "../../assets/topCreators";
import { TopCreator } from "@/widgets/TopCreator/TopCreator";
import rocket from "../../img/buttons/RocketLaunchViolent.svg";

import style from "./topcreators.module.scss";

export const TopCreators = () =>{
    return(
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.text}>
                    <h2>Top creators</h2>
                    <span>Checkout Top Rated Creators 
                        on the NFT Marketplace
                    </span>
                </div>
                <Button type={'line'} onClick={() => console.log('help')} src = {rocket}>View Rankings</Button>
            </div>
            <div className={style.creators}>
            {asset.map((item) => {
                return <TopCreator key={item.id} {...item} />
            })}
            </div>
        </div>
    )
}