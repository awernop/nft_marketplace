import Link from "next/link";

import style from "./footer.module.scss";

const links = [
    {link: "/marketplace", title: "Marketplace"},
    {link: "/rankings", title: "Rankings"},
    {link: "/wallet", title: "Connect a wallet"},
];

export const Footer = () =>{
    return(
        <footer className={style.main}>
            <div className={style.main__block}>
                <div className={style.left}>
                    <span>Explore</span>
                    <ul className={style.navigation}>
                        {links.map(({title, link}, i) => {
                            return <li key={i}><Link href={link}>{title}</Link></li>
                        })}
                    </ul>
                </div>
                <div className={style.right}>
                    <span className={style.right__maintxt}>Join our weekly digest</span>
                    <span className={style.right__txt}>Get exclusive 
                    promotions & updates<br/> straight to your inbox.
                    </span>
                    <form action="#">
                        <div className={style.form}>
                            <input type="email" placeholder="Enter your email here" className={style.form__input}/>
                            <button className={style.form__btn}>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}