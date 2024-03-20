import background from "../../img/gribobas.png";
import avatar from "../../img/avatar/Shroomie.png";
import Image from "next/image";
import { Button } from "@/shared/Button/Button";
import eye from "../../img/buttons/Eye.svg";
import { Timer } from "@/widgets/Timer/Timer";

import style from "./magicmashrooms.module.scss";

export const MagicMashrooms = () =>{
    return(
        <div className={style.main}>
            <div style={{backgroundImage: `url(${background.src})`, objectFit: 'cover'}} className={style.main2}>
            <div className={style.left}>
                <div className={style.person}>
                    <Image src={avatar} alt="" className={style.person__avatar}/>
                    <span>Shroomie</span>
                </div>
                <h2>Magic Mashrooms</h2>
                <Button type={'white'} onClick={() => console.log('help')} src = {eye}>See NFT</Button>
            </div>
            <Timer />
            </div>
        </div>
        
    )
}