export interface PageItem {
  alias: string;
  title: string;
  id: string;
  category: string;
}

export interface MenuItem {
  id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpened?: boolean;
}
