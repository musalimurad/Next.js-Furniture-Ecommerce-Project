import styles from './heroSlider.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from 'next/image';
import sliderOne from "../../assets/images/heroSlider1webp.webp"
import sliderTwo from "../../assets/images/heroSlider2webp.webp"
import sliderThree from "../../assets/images/heroSlider3.webp"
import Button from '../button/Button';


const HeroSlider = () => {
    return ( 
        <section className={styles.heroSlider}>
        <Swiper
          loop={true}
          autoplay={{delay:5000}}
          modules={[Pagination, Autoplay]}
          className={styles.heroSliderAllContent}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}>
            <SwiperSlide>
                <Image layout='responsive' height={620} objectFit='cover' src={sliderOne} className={styles.heroSliderImg}/>
                <div className={styles.overlayHero}>
                <div className={styles.slideImgContent}>
                   <p>No. 199122</p>
                   <h1>Pulco</h1>
                   <div className={styles.priceContent}>
                       <h3>$1266.00 <span>VAT included</span></h3>
                   </div>
                   <Button buttonContent="+ Discover Now"/>
               </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image layout='responsive' height={620} objectFit='cover' src={sliderTwo} className={styles.heroSliderImg}/>
                <div className={styles.overlayHero}>
                <div className={styles.slideImgContent}>
                   <p>No. 199122</p>
                   <h1>Pulco</h1>
                   <div className={styles.priceContent}>
                       <h3>$1266.00 <span>VAT included</span></h3>
                   </div>
                   <Button buttonContent="+ Discover Now"/>
               </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image layout='responsive' height={620} objectFit='cover' src={sliderThree} className={styles.heroSliderImg}/>
                <div className={styles.overlayHero}>
                <div className={styles.slideImgContent}>
                   <p>No. 199122</p>
                   <h1>Pulco</h1>
                   <div className={styles.priceContent}>
                       <h3>$1266.00 <span>VAT included</span></h3>
                   </div>
                   <Button buttonContent="+ Discover Now"/>
               </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </section>
     );
}
 
export default HeroSlider;