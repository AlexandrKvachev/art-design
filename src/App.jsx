import { useState } from 'react'
import Maininformation from "./components/MainInformation"
import CommercBlock from "./components/Commerc/CommercBlock"
import ArtBlock from "./components/Arts/ArtBlock"
import AdditInfo from "./components/AdditInfo/Additinfo"
import SwitchLang from './components/AdditInfo/SwitchLang'

const App = () => {
    const [lang, setLang] = useState('RU')
    return (
        <div className="wrapper">
            <div className="main-information"> <Maininformation/></div>
            <div className="commerc-block"> <CommercBlock/> </div>
                <div className="art-block"> <ArtBlock/> </div>
            <div className="addit-info-block"><AdditInfo lang={lang}/>
                <div className="lang-switch-btn"><SwitchLang lang={lang} setLang={setLang}/></div>
                <div className="contact-block"/>
            </div>
        </div>
    )
}

export default App