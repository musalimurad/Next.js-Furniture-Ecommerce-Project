import Image from 'next/image';
import styles from './chairCollection.module.scss';
import sectionImg from '../../assets/images/furnitureSection.webp';
import DarkButton from '../button/DarkButton';
const ChairCollection = () => {
return (
<section className={styles.ChairCollection }>
    <div className="container">
        <div className={styles.chairCollectionContent}>
            <Image layout='responsive' objectFit='cover' src={sectionImg} />
            <div className={styles.chairText}>
                <p># FURNITURES</p>
                <h2>Shell Chair Collection</h2>
                <p className={styles.chairDesc}>Since 1991, Auros Furniture has been a purveyor of quality modern furniture in
                    Ohi. With 20 international brands and counting in 2 shops</p>
                    <DarkButton buttonText="Shop Collections"/>
            </div>
        </div>
    </div>
</section>
);
}

export default ChairCollection;