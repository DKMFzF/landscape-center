import { IView } from "../../base/View";

export interface IBasket<T> {
  title: string;
  total: number;
  products: T[];
}

export interface IBasketSettings<T> {
  title: string;
  total: string;
  nextButton: string;
  basketView: {
    basketList: string;
    basketListContent: IView<T>;
  }
}

