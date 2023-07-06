import classNames from "classnames";
import styles from "./index.module.scss";

function Character({ image, isActiveFirst, isActiveSecond }) {
    return <div className={classNames(
        styles.character,
        { [styles.activeFirst]: isActiveFirst },
        { [styles.activeSecond]: isActiveSecond }
    )}>
        <img className={styles.characterAvatar} src={image} alt=""/>
    </div>
}

export default Character;