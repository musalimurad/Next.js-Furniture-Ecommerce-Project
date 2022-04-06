import styles from './trendingProductAll.module.scss';
import TrendingProductContent from './TrendingProductContent';
import productImgOne from '../../assets/images/productImg1.webp'
import productImgTwo from '../../assets/images/productImg2.webp'
import smallImgOne from '../../assets/images/proSmall1.webp';
import smallImgTwo from '../../assets/images/proSmall2.webp';
import smallImgThree from '../../assets/images/proSmall3.webp';
import smallImgFour from '../../assets/images/proSmall4.webp';
import greyImg from '../../assets/images/greyPro.webp';
import parfumOne from '../../assets/images/parfum1.webp'
import parfumTwo from '../../assets/images/parfum2.webp'
import stoolOne from '../../assets/images/birdStool1.webp'
import stoolTwo from '../../assets/images/birdStool2.webp'
import bottleOne from '../../assets/images/bottle1.webp'
import bottleTwo from '../../assets/images/bottle2.webp'
import chairOne from '../../assets/images/chair1.webp'
import chairTwo from '../../assets/images/chair2.webp'
import lampOne from '../../assets/images/lamp1.webp'
import lampTwo from '../../assets/images/lamp2.webp'
import boroOne from '../../assets/images/boro1.webp'
import boroTwo from '../../assets/images/boro2.webp'
import penOne from '../../assets/images/ball1.webp'
import penTwo from '../../assets/images/ball2.webp'
import Image from 'next/image';

const TrendingProductAll = () => {

return (
<section className={styles.trendProductAll}>
    <div className="container">
        <div className={styles.trendingHead}>
            <h1>Trending Products</h1>
            <p>Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table
                lights.</p>
        </div>

    </div>
    <div className={styles.trendingProducts}>
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center m-0">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent activeSale={"trendingProductContent_activeSale__jGWsB"} productImgOne={productImgOne}  getImg = {productImgTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={parfumOne}   getImg = {parfumTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent  productImgOne={stoolOne} getImg = {stoolTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={bottleOne} activeSale={"trendingProductContent_activeSale__jGWsB"} getImg = {bottleTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={chairOne} getImg = {chairTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={lampOne} activeSale={"trendingProductContent_activeSale__jGWsB"} getImg = {lampTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={boroOne}  getImg = {boroTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <TrendingProductContent productImgOne={penOne} activeSale={"trendingProductContent_activeSale__jGWsB"} getImg = {penTwo} setImg={greyImg}>
                    {/* onClick={()=>setSrc(true)} */}
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgOne}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgTwo}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgThree}/>
                    <Image  className='set-img' width={60} height={60} objectFit='cover' src={smallImgFour}/>


                    </TrendingProductContent>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default TrendingProductAll;