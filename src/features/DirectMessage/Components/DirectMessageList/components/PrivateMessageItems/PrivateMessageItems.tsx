import "./PrivateMessageItems.scss";
import tel from "../../../../../../assets/téléchargement.png";
import Avatar from "../../../../../../components/ui/avatar/Avatar";
const PrivateMessageItems = () => {
  return (
    <div className="private-message-items-container">
      <Avatar avatar={tel} />
      <p>Vryc</p>
    </div>
  );
};

export default PrivateMessageItems;
