import './DirectMessageList.scss'
import add_mp from '../../../../assets/add_mp.svg'
import PrivateMessageItems from './components/PrivateMessageItems/PrivateMessageItems'
const DirectMessageList = () => {
  return (
    <div className='direct-message-container' >
      <div className="direct-message-header" >
        <p className="title" >MESSAGE PRIVES</p>
        <img src={add_mp} alt="add_mp" />
      </div>
      <div className="direct-message-list" >
        <PrivateMessageItems />
        <PrivateMessageItems />
      </div>
    </div>
  )
}

export default DirectMessageList
