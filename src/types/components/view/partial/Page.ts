import { IClickable } from "../../base/View";

export interface IPageData {
  isLocked: boolean;
}

export interface IPageSettings extends IClickable<never> {
  wrapper: string;
  navigaion: string;
  basket: string;
  account: string;
  search: string;
  lockedClass: string;
}
