import Image from "next/image";

import "./posts.scss";

export const Posts = ({title, avatar, author, type, src}) =>{
    return(
        <div className = {`post ${type}`}>
            <div style={{backgroundImage: `url(${src.src})`}} className="post__top"></div>
            <div className="post__bottom">
                <div className="post__p">
                    <h2>{title}</h2>
                    <div className="post__author">
                        <Image src={avatar} alt="" className="post__author__img" />
                        <span>{author}</span>
                    </div>
                </div>
                <div className="post__line">
                    <div className="post__price">
                         <span className="post__txt">Price</span>
                         <span className="post__txt2">1.63 ETH</span>
                    </div>
                    <div className="post__high">
                         <span className="post__txt">Highest Bid</span>
                         <span className="post__txt2">0.33 wETH</span>
                    </div>
                </div>
            </div>
        </div>
    )
}