import ComCard from "./ComCard"

const CommercBlock = () => {
    const images = ["/src/assets/commerc/plug.jpg", "/src/assets/commerc/plug2.jpg" , "/src/assets/commerc/plug3.jpg"]
    const newImages = images.map((src) => (<ComCard src={src}/>))
    return (
        <div> {newImages} </div>
    )
}

export default CommercBlock