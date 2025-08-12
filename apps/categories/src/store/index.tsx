import { create } from 'zustand';

export interface Category {
  slug: string;
  name: string;
  url: string;
}
type State = {
  category: Category;
};
type Actions = {
  setCategory: (category: Category) => void;
};

export const useCategoryStore = create<State & Actions>((set) => ({
  category: {} as Category,
  setCategory: (category) => set(() => ({ category: category, })),
}))

