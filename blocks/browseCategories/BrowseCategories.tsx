import asset from "../../assets/categories";
import { Category } from "@/widgets/Category/Category";

import style from "./browsecategories.module.scss";

export const BrowseCategories = () =>{
    return(
        <div className={style.main}>
            <h2>Browse Categories</h2>
            <div className={style.line}>
                {asset.map((item) => {
                    return <Category key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}