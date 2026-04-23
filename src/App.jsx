import Maininformation from "./components/MainInformation"
import CommercBlock from "./components/Commerc/CommercBlock"
import ArtBlock from "./components/Arts/ArtBlock"

const App = () => {
    return (
        <div className="wrapper">
            <div className="main-information"> <Maininformation/></div>
            <div className="commerc-block"> <CommercBlock/> </div>
                <div className="art-block"> <ArtBlock/> </div>
            <div className="addit-info-block">
                <div className="lang-switch-btn"/>
                <div className="contact-block"/>
            </div>
        </div>
    )
}

export default App