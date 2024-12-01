import { useState } from "react";
import "./ServerListItems.scss";
import { createPortal } from "react-dom";
import ModalAddServer from "../../add/ModalAddServer";

type ServerListItemsProps = {
  serverImage: string;
  isIcon?: boolean;
};

const ServerListItems = ({
  serverImage,
  isIcon = false,
}: ServerListItemsProps) => {
  const [openCreateServerModal, setOpenCreateServerModal] =
    useState<boolean>(false);

  const handleCreateServerModal = () => {
    setOpenCreateServerModal(!openCreateServerModal);
  };

  const handleCloseModal = () => {
    setOpenCreateServerModal(false);
  };

  return (
    <div className="server-circle-container" onClick={handleCreateServerModal}>
      <div className="server-circle">
        <img
          src={serverImage}
          alt="Server"
          className={isIcon ? "" : "server-picture"}
        />
      </div>
      {openCreateServerModal &&
        isIcon &&
        createPortal(
          <ModalAddServer onClose={handleCloseModal} />,
          document.body
        )}
    </div>
  );
};

export default ServerListItems;
