import DirectMessageList from "./Components/DirectMessageList/DirectMessageList";
import Navigations from "./Components/Navigations/Navigations";
import UserProfile from "./Components/UserProfile/UserProfile";
import "./PanelMessage.scss";
const PanelMessage = () => {
  return (
    <div className="panel-container">
      <Navigations />
      <DirectMessageList />  
      <UserProfile />
    </div>
  );
};

export default PanelMessage;
