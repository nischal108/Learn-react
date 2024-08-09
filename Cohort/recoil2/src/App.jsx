import React from 'react'
import { messages, networkAtom, notifications, notificationsFamily, totalNotificationsSelector } from './atoms'
import { useRecoilValue, useRecoilValueLoadable} from 'recoil'

const App = () => {
  const network = useRecoilValue(networkAtom);
  const message = useRecoilValue(messages);
  const notification = useRecoilValue(notifications);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <div>
      <button>Home</button>
      <button>Network ({network.connectRequest + network.pageLikeRequest}) </button>
      <button>Jobs</button>
      <button>Messages ({message})</button>
      <button>Notifications ({notification})</button>
      <button>your image ({totalNotifications})</button>
      <button><NotificationBells id={3}/> </button>
      <button><NotificationBells id={3}/> </button>
      <button><NotificationBells id={2}/> </button>
    </div>
  )
}



function NotificationBells({id}){
  const notificationshere = useRecoilValueLoadable(notificationsFamily(id));
  console.log(notificationshere);
  
  if(notificationshere.state=="loading"){
    return(
      <div> loading please wait</div>
    )
  }

  if(notificationshere.state=="hasValue"){
    return(
      <div> {notificationshere.contents}</div>
    )
  }

  if(notificationshere.state=="hasError"){
    return(
      <div> there was an error</div>
    )
  }
  
}

export default App