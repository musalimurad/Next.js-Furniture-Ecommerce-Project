import Image from 'next/image';
import styles from './trendingProductContent.module.scss';
import productImgOne from '../../assets/images/productImg1.webp'

import DarkButton from '../button/DarkButton';
import FavoriteIcon from '../favoriteIcon/FavoriteIcon';

import { useState } from 'react';

const TrendingProductContent = (props) => {
    const [isSrc, setSrc] = useState(false);
   
   
return (
<div className={styles.TrendingProductContent}>
    <div className={styles.productContent}>
        <div className={styles.imageContent}>
            <div className={styles.imgOne}>
                <Image layout='responsive' objectFit='cover' src={props.productImgOne} />
                <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.onSale} ${props.activeSale}`}>
                        <span>ON SALE</span>
                    </div>
                    <div className={styles.favIco}>
                        <FavoriteIcon/>
                    </div>
                </div>
            </div>
            <div className={styles.imgTwo}>
                <Image layout='responsive' objectFit='cover' src={isSrc===true? props.setImg:props.getImg} />
                <div className={styles.favIco}>
                    <FavoriteIcon/>
                 </div>
                <div className={styles.addToCart}>
                    <DarkButton buttonText="+ Add To Cart" />
                </div>
            </div>
            <div className={styles.productContentText}>
                <div className="container">
                    <div className={styles.textHead}>
                        <h5>Soundless Speaker</h5>
                        <p>On sale from Rs. 17,965.11</p>
                    </div>
                    <div className={styles.productSmallImg}>
                        <div className="d-flex justify-content-center align-items-center">
                            {
                                props.children
                            }
                        {/*  */}
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default TrendingProductContent;