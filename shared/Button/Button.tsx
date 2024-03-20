import Image from "next/image"

import "./button.scss"

export const Button = ({ children, functionn, src, type}) =>{
    return(
        <button className={`btn1 ${type}`} onClick={functionn}>
            <Image src={src} alt=""/>
            <span>{children}</span>
        </button>
    )
}