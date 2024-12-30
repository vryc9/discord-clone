import "./Avatar.scss";
import Status from "./status/Status";
type AvatarProps = {
  avatar: string;
};

const Avatar = ({ avatar }: AvatarProps) => {
  return (
    <div className="avatar-container">
      <img className="avatar" src={avatar} alt="" />
      <Status />
    </div>
  );
};

export default Avatar;
