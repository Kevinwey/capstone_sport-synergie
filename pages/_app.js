import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [intensity, setIntensity] = useState("");
  const [category, setCategory] = useState("All");

  const [physique, setPhysique] = useState([
    { name: "Slim", checked: false },
    { name: "Normal", checked: false },
    { name: "Strong", checked: false },
  ]);
  const [fitnessLevel, setFitnessLevel] = useState([
    { name: "Unatheltic", checked: false },
    { name: "Fit", checked: false },
    { name: "Muscular", checked: false },
  ]);
  const [timePerWeek, setTimePerWeek] = useState([
    { name: "2-3x", checked: false },
    { name: "3-4x", checked: false },
    { name: "4+", checked: false },
  ]);
  const [preference, setPreference] = useState([
    { name: "Teamsport", checked: false },
    { name: "Individual sports", checked: false },
    { name: "Indoor", checked: false },
    { name: "Outdoor", checked: false },
  ]);

  const inputFields = {
    age: setAge,
    height: setHeight,
    weight: setWeight,
    intensity: setIntensity,
    category: setCategory,
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    inputFields[name](value);
  }

  function handleChange(type, name) {
    const stateVariables = {
      physique: [physique, setPhysique],
      fitnessLevel: [fitnessLevel, setFitnessLevel],
      timePerWeek: [timePerWeek, setTimePerWeek],
      preference: [preference, setPreference],
    };

    const [state, setState] = stateVariables[type];
    const newState =
      type === "preference"
        ? updatePreference(state, name)
        : updateSingleItem(state, name);

    setState(newState);
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
        formData={{
          age,
          height,
          weight,
          intensity,
          category,
          physique,
          fitnessLevel,
          timePerWeek,
          preference,
        }}
        onChange={handleInputChange}
        handleChange={handleChange}
      />
    </>
  );
}
