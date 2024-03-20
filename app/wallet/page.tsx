import Image from "next/image";
import pic from "../../img/wallet.png";
import { WalletChoose } from "@/shared/WalletChoose/WalletChoose";
import logo1 from "../../img/logo/Metamask.svg";
import logo2 from "../../img/logo/WalletConnect.png";
import logo3 from "../../img/logo/Coinbase.svg";

import style from "./wallet.module.scss";

const Wallet = () =>{
    return(
        <div className={style.main}>
            <Image src={pic} alt=""/>
            <div className={style.right}>
                <h2>Connect wallet</h2>
                <span className={style.right__txt}>Choose a wallet you want to connect. <br />
                    There are several wallet providers.</span>
                    <div className={style.wals}>
                        <WalletChoose src={logo1}>Metamask</WalletChoose>
                        <WalletChoose src={logo2}>Wallet Connect</WalletChoose>
                        <WalletChoose src={logo3}>Coinbase</WalletChoose>
                    </div>
            </div>
        </div>
    )
}

export default Wallet;