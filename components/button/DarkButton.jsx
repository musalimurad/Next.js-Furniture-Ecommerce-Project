import styles from './darkButton.module.scss';

const DarkButton = (props) => {
    return ( 
        <div className={styles.darkButton}>
            <button>{props.buttonText}</button>
        </div>
     );
}
 
export default DarkButton;