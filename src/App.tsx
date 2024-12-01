import "./App.css";
import Home from "./components/Home/Home";
import ServerList from "./features/server/components/ServerList/ServerList";

function App() {
  return (
    <div className="container" >
      <ServerList /> 
      <Home />
    </div>
  );
}

export default App;
