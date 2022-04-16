import './PopupMessage.scss';

const PopupMessage = ({text}) => {

    return (
        <div className='popup-container'>
            <p className='popup-text'>{text}</p>
        </div>
    )
}

export default PopupMessage;