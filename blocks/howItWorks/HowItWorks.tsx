import Image from "next/image";
import promo1 from "../../img/promo/promo1.png";
import promo2 from "../../img/promo/promo2.png";
import promo3 from "../../img/promo/promo3.png";

import style from "./howitworks.module.scss";

export const HoeItWorks = () =>{
    return(
        <div className={style.main}>
            <div className={style.title}>
                <h2>How it works</h2>
                <span>Find out how to get started</span>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <Image src={promo1} alt=""/>
                    <span>Setup Your wallet</span>
                    <p>Set up your wallet of choice. Connect
                         it to the Animarket by clicking the 
                         wallet icon in the top right corner.</p>
                </div>
                <div className={style.card}>
                    <Image src={promo2} alt=""/>
                    <span>Create Collection</span>
                    <p>Upload your work and setup your collection. 
                        Add a description, social links and floor price.</p>
                </div>
                <div className={style.card}>
                    <Image src={promo3} alt=""/>
                    <span>Start Earning</span>
                    <p>Choose between auctions and fixed-price 
                        listings. Start earning by selling your 
                        NFTs or trading others.</p>
                </div>
            </div>
        </div>
    )
}