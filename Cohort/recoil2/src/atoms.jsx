import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: {
    connectRequest: 6,
    pageLikeRequest: 8,
  },
});

export const messages = atom({
    key:"message",
    default:10
})

export const notifications = atom({
    key:"notifications",
    default:1
})


export const totalNotificationsSelector = selector({
  key: 'totalNotifications',
  get:({get})=>{
    const network = get(networkAtom);
    const message = get(messages);
    const notification = get(notifications);

    return network.connectRequest+network.pageLikeRequest+message+notification;

  }
})



export const notificationsFamily = atomFamily({
  key: "notificationsFamily",
  default: selectorFamily({
    key: "notificationDefault",
    get: (id) => () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(`here I am ${id}`);
      }, 5000);  
    }),
  }),
});

