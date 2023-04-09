import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useState({
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
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleChange(type, name) {
    setFormData((prevState) => {
      const newState =
        type === "preference"
          ? updatePreference(prevState[type], name)
          : updateSingleItem(prevState[type], name);

      return {
        ...prevState,
        [type]: newState,
      };
    });
  }

  function updateSingleItem(state, name) {
    return state.map((item) =>
      item.name === name
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );
  }

  function updatePreference(state, name) {
    return state.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        formData={formData}
        onChange={handleInputChange}
        handleChange={handleChange}
      />
    </>
  );
}
