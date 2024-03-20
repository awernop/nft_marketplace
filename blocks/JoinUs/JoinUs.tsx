import Image from "next/image";
import photo from "../../img/spaceInvader.png";
import { Button } from "@/shared/Button/Button";
import btn from "../../img/buttons/EnvelopeSimple.svg";

import style from "./joinus.module.scss";

export const JoinUs = () =>{
    return(
        <div className={style.main}>
            <div className={style.box}>
                <Image src={photo} alt=""/>
                <div className={style.right}>
                    <h2>Join our weekly digest</h2>
                    <span className={style.txt}>Get exclusive promotions & 
                        updates straight to your inbox.</span>
                        <form action="#">
                        <div className={style.form}>
                            <input type="email" placeholder="Enter your email here" className={style.form__input}/>
                            <Button type={'violet'} onClick={() => console.log('help')} src = {btn}>Subscribe</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}