import Image from "next/image";

import style from "./artist.module.scss";

export const Artist = ({id, fullname, avatar}) =>{
    return(
    <div className={style.main}>
        <div className={style.id}>{id}</div>
        <Image src={avatar} alt="" className={style.img}/>
        <span className={style.txt__name}>{fullname}</span>
        <div className={style.txt}>
            <span className={style.txt__proc}>+1.41%</span>
            <span className={style.txt__num}>602</span>
            <span className={style.txt__price}>12.4 ETH</span>
        </div>
    </div>
    )
}