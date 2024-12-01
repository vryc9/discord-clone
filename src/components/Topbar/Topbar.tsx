import Conversation from './Components/Conversation/Conversation'
import Navigation from './Components/Navigation/Navigation'
import './Topbar.scss'
const Topbar = () => {
  return (
    <div className="topbar-container" >
      <Conversation/>
      <Navigation />
    </div>
  )
}

export default Topbar
