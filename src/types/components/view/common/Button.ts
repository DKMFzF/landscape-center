import { IClickable } from '@/types/components/base/View';

export interface IButtonData {
  label: string;
}

export interface IButtonSettings<T> extends IClickable<T> {}
