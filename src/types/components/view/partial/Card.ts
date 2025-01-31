import { IClickable } from "../../base/View";

export interface ICardData {
  title: string;
  image: string;
  description: string;
}

export interface ICardCourseData extends ICardData {
  tag: string;
}

export interface ICardBookData extends ICardData {
  price: number;
}

export interface ICardSettings extends IClickable<string> {
  title: string;
  image: string;
  description: string;
}

export interface ICardBookSettings extends ICardSettings {
  tag: string;
}

export interface ICardBookSettings extends ICardSettings {
  price: string;
}
