import { useEffect, useRef} from "react";
import anime from "animejs";

import style from "./statistic.module.scss"

export const Statistic = ({ content }) =>{
    const { indicator, type} = content;
    const indicatorItem = useRef(null);

    const value = {
        props1: "0",
    };

    useEffect(() => {
        anime({
            targets: value,
            props1: indicator,
            easing: 'linear',
            round: 1,
            duration: 1500,
            update: function () {
                indicatorItem.current.innerHTML = value.props1;
            },
        });
    }, []);

    return(
        <div className={style.number}>
            <span className="nums" ref={indicatorItem}>{indicator}</span>
            {type}
        </div>
    )
}