import { atom } from 'recoil';

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
