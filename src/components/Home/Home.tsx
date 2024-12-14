import PanelMessage from "../../features/DirectMessage/PanelMessage";
import Topbar from "../Topbar/Topbar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Topbar />
      <PanelMessage />
    </div>
  );
};

export default Home;
