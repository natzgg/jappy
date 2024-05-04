import { create } from "zustand";

interface EmployerStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useEmployerSidebar = create<EmployerStore>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
