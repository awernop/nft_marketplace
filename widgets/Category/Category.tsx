'use client'
import Image from "next/image";

import style from "./category.module.scss";

export const Category = ({category, logo, background}) =>{
    return(
        <div className={style.main}>
            <div className={style.background} style={{backgroundImage: `url(${background.src})` }}>
                <div className={style.blur}>
                <Image src={logo} alt=""/>
                </div>
            </div>
            <span className={style.txt}>{category}</span>
        </div>
    )
}