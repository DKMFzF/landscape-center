import { IView } from "../../base/View";

export interface IModalData<C> {
  content: C;
  isActive: boolean;
}

// TODO: дополнить
export interface IModalSettings<C> {
  // настройки под классы
  close: string;
  content: string;
  activeClass: string;

  // отображение
  contentView: IView<C>;

  onOpen?: () => void;
  onClose?: () => void;
}
