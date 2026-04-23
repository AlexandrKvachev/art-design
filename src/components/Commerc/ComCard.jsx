import styles from "./ComCard.module.scss"

const ComCard = ({ src }) => {
    return (
        <img className={styles.commercArt}  src={src}/>
    )
}

export default ComCard