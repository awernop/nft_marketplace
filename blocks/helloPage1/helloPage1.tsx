'use client'

import { Button } from "@/shared/Button/Button";
import rocket from "@/img/buttons/RocketLaunch.svg";
import { Statistic } from "@/shared/Statistic/Statistic";
import Image from "next/image";
import pic from "@/img/picture/homePic.png";
import avatar from "@/img/avatar/avatar1.png";
import { useEffect, useRef } from 'react';
import anime from "animejs";

import style from "./helloPage1.module.scss"

const nums = [
    { indicator: "240k", type: "Total Sale" },
    { indicator: "100k", type: "Auctions" },
    { indicator: "240k", type: "Artists" },
];

export const HelloPage1 = () =>{

    const itemRef = useRef(null);

    useEffect(() => {
        anime({
            targets: itemRef.current,
            translateX: [-500, 0],
            duration: 3000,
        });
    }, []);

    return(
        <div className={style.main1}>
            <div className={style.left}>
                <h1>Discover digital art & Collect NFTs</h1>
                <span className={style.left__txt}>NFT marketplace UI created with 
                    Anima for Figma. Collect, buy and 
                    sell art from more than 
                    20k NFT artists.
                </span>
                <div>
                <Button type={'violet'} onClick={() => console.log('help')} src = {rocket}>Get Started</Button>
                </div>
                <div className={style.linenum}>
                    {nums.map((nums, i) => {
                        return <Statistic key={i} content={...nums} />
                    })}
                </div>
            </div>
            <div className={style.right}>
                <div ref={itemRef} className={style.right__card}>
                    <Image src={pic} alt=""/>
                    <div className={style.right__txt}>
                        <span className={style.right__card__title}>Space Walking</span>
                        <div className={style.right__card__person}>
                            <Image src={avatar} alt="" className={style.img}/>
                            <span className={style.right__card__person__name}>Animakid</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}