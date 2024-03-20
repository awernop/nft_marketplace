import Image from "next/image";
import Link from "next/link";

import style from "./walletchoose.module.scss";

export const WalletChoose = ({children, src}) =>{
    return(
        <Link href="/">
        <div className={style.main}>
            <Image src={src} alt=""/>
            <span>{children}</span>
        </div>
    </Link>
    )
}