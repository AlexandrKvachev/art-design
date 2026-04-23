import ArtCard from "./ArtCard"

const ArtBlock = () => {
    const images = ["/src/assets/art/plug.jpg", "/src/assets/art/plug2.jpg" , "/src/assets/art/plug3.jpg"]
    const newImages = images.map((src) => (<ArtCard src={src}/>))
    return (
        <div> {newImages} </div>
    )
}

export default ArtBlock