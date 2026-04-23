import styles from "./ArtCard.module.scss"

const ArtCard = ({ src }) => {
    return (
        <img className={styles.artImage} src={src}/>
    )
}

export default ArtCard