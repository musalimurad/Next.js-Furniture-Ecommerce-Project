import styles from './favoriteIcon.module.scss';
import * as Icon from 'react-bootstrap-icons';

const FavoriteIcon = () => {
    return ( 
        <div className={styles.favoriteIcon}>
            <Icon.Heart className={styles.heartIco}/>
        </div>
     );
}
 
export default FavoriteIcon;