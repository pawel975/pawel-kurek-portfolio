import "./PopupMessage.scss";

interface PopupMessageInterface {
  text: string;
}

const PopupMessage = ({ text }: PopupMessageInterface) => {
  return (
    <div className="popup-container">
      <p className="popup-text">{text}</p>
    </div>
  );
};

export default PopupMessage;
