import styles from './collectionList.module.scss';
import Image from 'next/image';


const CollectionList = (props) => {
return (
<div className={styles.collectionList}>
    <div className={styles.collectionCart}>
        <Image className={styles.collectionCartImg} layout='responsive' objectFit='cover' src={props.img} />
        <div className={styles.cartImgText}>
            <div className="container">
                <h2>{props.title}</h2>
                <p>{props.items} items</p>
            </div>
        </div>
    </div>
</div>
);
}

export default CollectionList;