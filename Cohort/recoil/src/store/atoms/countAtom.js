import { atom, selector } from 'recoil';

const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default countState;

export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countState);
        return count%2;
    }
})
