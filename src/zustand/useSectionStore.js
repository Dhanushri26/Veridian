import create from '';

const useSectionStore = create((set) => ({
  selectedSection: 'home', // Default section
  setSelectedSection: (section) => set({ selectedSection: section }),
}));

export default useSectionStore;
