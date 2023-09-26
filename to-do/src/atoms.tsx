import { atom } from "recoil";

export interface IToGo {
  id: number;
  text: string;
  category: "TO_GO" | "BEEN" | "LIKE";
};

// interface IToGoState {
//   [key: string]: IToGo[];
// }

export const toGoState = atom<IToGo[]>({
  key: "toGo",
  default: [],
});