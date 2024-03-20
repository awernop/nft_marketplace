import Image from "next/image";
import Link from "next/link";

import style from "./trendcollect.module.scss";

export const TrendCollect = ({title, author, avatar, pic1, pic2, pic3}) =>{
    return(
        <div className={style.main}>
            <div className={style.images}>
                <Image src={pic1} alt="" className={style.images__main}/>
                <div className={style.images__line}>
                    <Image src={pic2} alt="" className={style.images__img}/>
                    <Image src={pic3} alt="" className={style.images__img}/>
                    <Link href="#">
                        <div className={style.images__more}>
                            1025+
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.title}>
                <Link href="#">
                    <span className={style.title__title}>{title}</span>
                </Link>
                <div className={style.title__author}>
                    <Image src={avatar} alt="" className={style.title__author__avatar}/>
                    <Link href="#">
                        <span className={style.title__author__name}>{author}</span>
                    </Link>
                </div>
            </div>
        </div>
    ) 
}