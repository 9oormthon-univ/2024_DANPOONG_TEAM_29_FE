import { create } from 'zustand';

interface UserItem {
  type: string;
  value: string;
}

interface UserStore {
  userList: UserItem[];
  setUserList: (newUserList: UserItem[]) => void;
  updateUser: (type: string, value: string) => void;
}

export const useInfoStore = create<UserStore>((set) => ({
  userList: [
    { type: 'nickName', value: '' },
    { type: 'age', value: '' },
    { type: 'career', value: '' },
    { type: 'name', value: '' },
    { type: 'language', value: '' },
  ],
  setUserList: (newUserList) => set({ userList: newUserList }),
  updateUser: (type, value) =>
    set((state) => ({
      userList: state.userList.map((item) => (item.type === type ? { ...item, value } : item)),
    })),
}));
