import Image from "next/image";
import { Form } from "@/widgets/Form/Form";
import pic from "../../img/spaceinvader2.png";

import style from "./account.module.scss";

const Account = () =>{
    return(
        <div className="container">
            <div className={style.main}>
                <Image src={pic} alt=""/>
                <div className={style.right}>
                    <div className={style.title}>
                        <h2>Create account</h2>
                        <span>Welcome! enter your details and start 
                            creating, collecting and selling NFTs.
                        </span>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Account;