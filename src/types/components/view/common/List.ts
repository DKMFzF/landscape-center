import { IView } from '@/types/components/base/View';

export interface IListDate<T> {
  item: T[];
}

export interface IListSettings<T> {
  item: IView<T>;
  activeClass: string;
  itemClass: string; 
}
