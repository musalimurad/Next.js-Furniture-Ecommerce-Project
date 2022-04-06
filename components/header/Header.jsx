import Link from 'next/link';
import styles from './header.module.scss';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
const Header = () => {
    const [isSearch, setSearch] = useState(false);
    
return (
<header id={styles.header}>
    <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.headerLeft}>
            <div className="d-flex align-items-center">
                <div className={styles.logo}>
                    <h1>
                        <Link href="/"><a>UNEOX</a></Link>
                    </h1>
                </div>
                <div className={styles.headerNavMenu}>
                    <div className="d-flex align-items-center">
                        <Icon.List className={styles.navMenuIcon} />
                        <span>menu</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.headerRight}>
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.iconContent} ${styles.hideIcon}`}>
                    <div className={styles.iconTemplate}>
                        <div onClick={()=>setSearch(true)}  className={styles.cartHover}>
                            <Icon.Search className={`${styles.icon} `} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.iconContent} ${styles.hideIcon}`}>
                    <div className={styles.iconTemplate}>
                        <div className={styles.cartHover}>
                            <Icon.Person className={`${styles.icon} `} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.iconContent} ${styles.hideIcon}`}>
                    <div className={styles.iconTemplate}>
                        <div className={styles.cartHover}>
                            <Icon.Heart className={`${styles.icon} `} />
                        </div>
                        <span>0</span>
                    </div>
                </div>
                <div className={`${styles.iconContent} ${styles.hideIcon}`}>
                    <div className={styles.iconTemplate}>
                        <div className={styles.cartHover}>
                            <Icon.ArrowLeftRight className={`${styles.icon} `} />
                        </div>
                        <span>0</span>
                    </div>
                </div>
                <div className={`${styles.iconContent}`}>
                    <div className={`${styles.iconTemplate} ${styles.cartTemplate}`}>
                        <div className={`${styles.cartHover}`}>
                            <Icon.Cart3 className={`${styles.icon} ${styles.cartIco}`} />
                            <span>0</span>
                        </div>
                        <div className={styles.cartContent}>
                            <div className={styles.cartBg}>
                                <Icon.Cart3 className={`${styles.icon} ${styles.basketCartContent}`} />

                            </div>
                            <div className={styles.bgContent}>
                                <p>No products in the cart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
);
}
export default Header;