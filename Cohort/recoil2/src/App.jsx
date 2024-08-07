import React from 'react'
import { messages, networkAtom, notifications } from './atoms'
import {useRecoilValue} from 'recoil'

const App = () => {
  const network = useRecoilValue(networkAtom);
  const message = useRecoilValue(messages);
  const notification = useRecoilValue(notifications);
  return (
    <div>
      <button>Home</button>
      <button>Network ({network.connectRequest + network.pageLikeRequest}) </button>
      <button>Jobs</button>
      <button>Messages ({message})</button>
      <button>Notifications ({notification})</button>
    </div>
  )
}

export default App