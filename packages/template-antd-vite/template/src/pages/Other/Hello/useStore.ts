import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IState {
  name: string;
  age: number;
  updateName: (name: string) => void;
  becomeOlder: () => void;
}

const useStore = create<IState>()(
  immer(set => ({
    age: 20,
    name: 'reactseed',
    updateName: (name: string) => {
      set(() => ({ name }));
    },
    becomeOlder: () => {
      set(state => {
        state.age += 1;
      });
    },
  }))
);

export default useStore;
