const ContactBlock = ({ lang }) => {
    return (
        <adress>
            {lang === 'RU' ? 'Что бы связаться со мной:' : 'To contact me:'} ContactText
        </adress>
    )
}

export default ContactBlock