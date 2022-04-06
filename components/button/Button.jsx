import styles from './button.module.scss';

const Button = (props) => {
    return ( 
        <div className={styles.button}>
            <button>{props.buttonContent}</button>
        </div>
     );
}
 
export default Button;