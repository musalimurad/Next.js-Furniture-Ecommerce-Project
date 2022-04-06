import styles from './collectionAllList.module.scss';
import CollectionList from './CollectionList';
import cartImgOne from '../../assets/images/collectionCart.webp'
import cartImgTwo from '../../assets/images/collectionCart2.webp'

const CollectionAllList = () => {
return (
<section className={styles.collectionAllList}>
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <CollectionList img={cartImgOne} title="Stools" items="8"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <CollectionList  img={cartImgTwo} title="Sofas" items="7"/>
            </div>

        </div>
    </div>
</section>
);
}

export default CollectionAllList;