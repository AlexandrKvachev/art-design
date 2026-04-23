import Maininformation from "./components/MainInformation"

const App = () => {
    return (
        <div className="wrapper">
            <div className="main-information"> <Maininformation/></div>
            <div className="commerc-block"/>
                <div className="art-block"/>
            <div className="addit-info-block">
                <div className="lang-switch-btn"/>
                <div className="contact-block"/>
            </div>
        </div>
    )
}

export default App