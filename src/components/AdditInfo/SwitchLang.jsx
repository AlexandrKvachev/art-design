const SwitchLang = ({ lang, setLang }) => {

    return (
        <div className="switchBlock">
            <button
                className={lang === 'RU' ? 'lang' : ''}
                onClick={() => setLang('RU')}
            >RU</button>
            <button
                className={lang === 'ENG' ? 'lang' : ''}
                onClick={() => setLang('ENG')}
            >ENG</button>
        </div>
    )
}

export default SwitchLang