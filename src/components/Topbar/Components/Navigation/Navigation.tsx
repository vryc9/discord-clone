import React, { useState } from "react";
import "./Navigation.scss";
import friends from "../../../../assets/Friends.svg";
import Actions from "./Components/actions/Actions";

const Navigation: React.FC = () => {
  type FriendsStatus = "En ligne" | "Tous" | "En attente" | "Bloqué";

  interface FriendStatus {
    status: FriendsStatus;
    isSelected: boolean;
  }

  const [friendsStatus, setFriendsStatus] = useState<FriendStatus[]>([
    {
      status: "En ligne",
      isSelected: true,
    },
    {
      status: "Tous",
      isSelected: false,
    },
    {
      status: "En attente",
      isSelected: false,
    },
    {
      status: "Bloqué",
      isSelected: false,
    },
  ]);

  const handleStatusSelect = (selectedStatus: FriendsStatus): void => {
    const updatedStatus: FriendStatus[] = friendsStatus.map((status) => ({
      ...status,
      isSelected: status.status === selectedStatus,
    }));
    setFriendsStatus(updatedStatus);
  };

  return (
    <div className="navigation-container">
      <div className="left-navigation">
        <div className="friends">
          <img src={friends} alt="friends-icon" />
          <strong>Amis</strong>
        </div>
        <div className="separator"></div>
        <div className="status">
          <ul>
            {friendsStatus.map((friend) => (
              <li
                key={friend.status}
                className={friend.isSelected ? "selected" : ""}
                onClick={() => handleStatusSelect(friend.status)}
              >
                {friend.status}
              </li>
            ))}
          </ul>
          <button>Ajouter</button>
        </div>
      </div>
      <div className="right-navigation">
        <Actions />
      </div>
    </div>
  );
};

export default Navigation;
