import { create } from 'zustand';

const useSectionStore = create((set) => ({
  selectedSection: 'Home', 
  setSelectedSection: (section) => set({ selectedSection: section }),
}));

export default useSectionStore;
