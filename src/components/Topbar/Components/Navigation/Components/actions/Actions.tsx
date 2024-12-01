import NewGroupDM from "../../../../../../assets/New Group DM.svg";
import Inbox from "../../../../../../assets/Inbox.svg";
import HelpSupport from "../../../../../../assets/Help & Support.svg";
import "./Actions.scss";

interface ActionTypes {
  icon: string;
  action: () => void;
}

const Actions = () => {
  const actions: ActionTypes[] = [
    {
      icon: NewGroupDM,
      action: () => {
        console.log("New Group DM");
      },
    },
    {
      icon: Inbox,  
      action: () => {
        console.log("Inbox");
      },
    },
    {
      icon: HelpSupport,
      action: () => {
        console.log("Help & Support");
      },
    },
  ];
  return (
    <ul>
      {actions.map(({action, icon}, index) => (
        <li key={index} onClick={action}>
          <img src={icon} alt="action-icon" />
        </li>
      ))}
    </ul>
  );
};

export default Actions;
