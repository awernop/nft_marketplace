'use client'
import asset from "../../assets/posts";
import { Posts } from "@/widgets/Posts/Posts";
import { useState } from "react";

import style from "./marketplace.module.scss";

const runSearch = (query: string) => {
    if(!query){
        return asset;
    }
  
    const lowerCaseQuery = query.toLowerCase();
  
    return asset.filter((item) => 
    item.title.toLowerCase().includes(lowerCaseQuery) || item.author.toLowerCase().includes(lowerCaseQuery))
  };

const Marketplace = () =>{
    const [item, setAsset] = useState(asset);

  const handleChange = (event: { target: { value: string; }; }) => {
    const foundAsset = runSearch(event.target.value);
    setAsset(foundAsset);
};


    return(
        <div className="container">
            <div className={style.main}>
                <div className={style.top}>
                    <div className={style.title}>
                        <h2>Browse Marketplace</h2>
                        <span>Browse through more than 
                            50k NFTs on the NFT Marketplace.
                        </span>
                    </div>
                    <input type="text" placeholder="Search your favourite NFTs" onChange={handleChange}/>
                </div>
                <div className={style.bottom}>
                    <div className={style.filter}>
                        <div className={style.active}>
                            <span>NFTs</span>
                            <div>302</div>
                        </div>
                        <div className={style.passive}>
                            <span>Collections</span>
                            <div>67</div>
                        </div>
                    </div>
                    <div className={style.posts__back}>
                        <div className={style.posts}> 
                        {item.map((item) => {
                            return item.id > 3 ? <Posts key={item.id} {...item} /> : null
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace;
