import { atom } from "recoil";

export interface IToGo {
  id: number;
  text: string;
};

interface IToGoState {
  [key: string]: IToGo[];
}

export const toGoState = atom<IToGoState>({
  key: "toGo",
  default: {
    "To Go": [],
    Been: [],
    Like: [],
  },
});