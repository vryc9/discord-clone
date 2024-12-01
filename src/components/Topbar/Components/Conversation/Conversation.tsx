import Input from "../../../ui/Input";
import "./Conversation.scss";

const Conversation = () => {
  return (
    <div className="conversation-container">
      <Input
        placeHolder="Recherche/Lancer une conversation"
        type="button"
        name="search"
        id="search"
        onClick={() => console.log("Search")}
      />
    </div>
  );
};

export default Conversation;
