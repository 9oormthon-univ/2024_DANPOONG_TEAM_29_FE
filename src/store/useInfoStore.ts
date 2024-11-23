import { create } from 'zustand';

import { UserItem } from '@/types/userInfoType';

interface UserStore {
  userList: UserItem[];
  setUserList: (newUserList: UserItem[]) => void;
  updateUser: (type: string, value: string) => void;
}

export const useInfoStore = create<UserStore>((set) => ({
  userList: [
    { type: 'nickname', value: '' },
    { type: 'ageRange', value: '' },
    { type: 'part', value: '' },
    { type: 'name', value: '' },
    { type: 'language', value: '' },
  ],
  setUserList: (newUserList) => set({ userList: newUserList }),
  updateUser: (type, value) =>
    set((state) => ({
      userList: state.userList.map((item) => (item.type === type ? { ...item, value } : item)),
    })),
}));
