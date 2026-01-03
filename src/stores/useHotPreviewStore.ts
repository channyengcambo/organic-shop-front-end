import { create } from "zustand";

type HotPreviewState = {
  open: boolean;
  productId?: string;

  openPreview: (id: string) => void;
  closePreview: () => void;
};

export const useHotPreviewStore = create<HotPreviewState>((set) => ({
  open: false,
  productId: undefined,

  openPreview: (id) => set({ open: true, productId: id }),
  closePreview: () => set({ open: false, productId: undefined }),
}));
