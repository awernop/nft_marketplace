import asset from "../../assets/artists";
import { Artist } from "@/shared/Artist/Artist";
import Link from "next/link";

import style from "./rankings.module.scss";

const Ranking = () =>{
    return(
        <div className="container">
            <div className={style.main}>
                <div className={style.title}>
                    <h2>Top Creators</h2>
                    <span>Check out top ranking NFT 
                        artists on the NFT Marketplace.
                    </span>
                </div>
                <div className={style.buttons}>
                    <div className={style.active}>Today</div>
                    <div className={style.passive}>This Week</div>
                    <div className={style.passive}>This Month</div>
                    <div className={style.passive}>All Time</div>
                </div>
                <div className={style.cardes}>
                    <div className={style.cardes__row}>
                        <span className={style.cardes__num}>#</span>
                        <span className={style.cardes__artist}>Artist</span>
                        <div className={style.cardes__txt}>
                            <span>Change</span>
                            <span>NFTs Sold</span>
                            <span>Volume</span>
                        </div>
                    </div>
                    <div className={style.atrists}>
                        {asset.map((item) => {
                            return <Link href="#"><Artist key={item.id} {...item} /></Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking;