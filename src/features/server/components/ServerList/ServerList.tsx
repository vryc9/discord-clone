import "./ServierList.css";
import plus from "../../../../assets/Plus.svg";
import discord_icon from "../../../../assets/discord_icon.svg";
import browse from "../../../../assets/browse.svg";
import discord_heading from "../../../../assets/discord_heading.png";
import ServerListItems from "./ServerListItems/ServerListItems";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { fetchAllServers, selectAllPost } from "../../serverSlice";
import { Server } from "../../models/Server";
import { useEffect } from "react";

const ServerList = () => {
  const dispatch = useAppDispatch();
  const allServeur: Server[] = useAppSelector(selectAllPost);

  useEffect(() => {
    dispatch(fetchAllServers());
  }, [dispatch]);

  const decodeImage = (image: string): string => {
    return "data:image/png;base64," + image;
  };

  return (
    <div className="list-server-container">
      <img src={discord_heading} alt="discord-heading" />
      <ServerListItems serverImage={discord_icon} isIcon={true} />
      <span className="separator"></span>
      {allServeur.map((serveur) => (
        <ServerListItems
          key={serveur.id}
          serverImage={decodeImage(serveur.serverPicture)}
        />
      ))}
      <ServerListItems serverImage={plus} isIcon={true} />
      <ServerListItems serverImage={browse} isIcon={true} />
    </div>
  );
};

export default ServerList;
