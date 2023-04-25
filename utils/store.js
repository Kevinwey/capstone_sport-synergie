import create from "zustand";

const useStore = create((set) => ({
  formData: {
    age: "",
    height: "",
    weight: "",
    intensity: "",
    category: "",
    physique: [
      { name: "Slim", checked: false },
      { name: "Normal", checked: false },
      { name: "Strong", checked: false },
    ],
    fitnessLevel: [
      { name: "Unathletic", checked: false },
      { name: "Fit", checked: false },
      { name: "Muscular", checked: false },
    ],
    timePerWeek: [
      { name: "2-3x", checked: false },
      { name: "3-4x", checked: false },
      { name: "4+", checked: false },
    ],
    preference: [
      { name: "Teamsport", checked: false },
      { name: "Individual sports", checked: false },
      { name: "Indoor", checked: false },
      { name: "Outdoor", checked: false },
    ],
  },
  sports: [],
  selectedSport: "",
  level: "Beginner",
  count: 0,
  showCount: false,
  showAside: false,

  getRandomSports: (sports) => {
    const randomSports = sports
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return randomSports;
  },

  handleNewRoll: () => {
    set((state) => ({
      sports: state.getRandomSports(data.data),
      selectedSport: "",
    }));
  },

  handleSelectSport: (sport) => {
    set({ selectedSport: sport });
    console.log("selectedSport", sport);
  },

  handleInputChange: (event) => {
    const { name, value } = event.target;
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  },

  handleChange: (type, name) => {
    set((prevState) => {
      const newState =
        type === "preference"
          ? updatePreference(prevState.formData[type], name)
          : updateSingleItem(prevState.formData[type], name);

      return {
        formData: {
          ...prevState.formData,
          [type]: newState,
        },
      };
    });
  },

  updateSingleItem: (state, name) => {
    return state.map((item) =>
      item.name === name
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );
  },

  updatePreference: (state, name) => {
    return state.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
  },
}));

export default useStore;
