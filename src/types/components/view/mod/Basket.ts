import { IView } from '@/types/components/base/View';

export interface IBasketData {
  title: string;
  total: number;
  products: [];
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

