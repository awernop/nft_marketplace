import Link from "next/link";
import Image from "next/image";

import style from "./topcreator.module.scss";

export const TopCreator = ({id, author, avatar}) =>{
    return(
        <Link href="#">
            <div className={style.main}>
                <div className={style.id}>{id}</div>
                <Image src={avatar} alt=""/>
                <span className={style.name}>{author}</span>
                <p className={style.total}>Total Sales: <span className={style.total__num}>34.53 ETH</span></p>
            </div>
        </Link>
    )
}