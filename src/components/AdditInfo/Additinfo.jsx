import SwitchLang from "./SwitchLang"

const AdditInfo = ({ lang }) => {
    return (
        <p>{lang === 'RU' ? 'Дополнительная информация будет находится здесь' : 'Addit information will be here'}</p>
    )
}

export default AdditInfo