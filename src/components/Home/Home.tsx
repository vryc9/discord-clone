import DirectMessage from "../../features/DirectMessage/DirectMessage";
import Topbar from "../Topbar/Topbar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Topbar />
      <DirectMessage />
    </div>
  );
};

export default Home;
