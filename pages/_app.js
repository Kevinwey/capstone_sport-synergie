import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import sportsData from "../lib/sports";

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

  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    setLevel(localStorage.getItem(selectedSport.name + "_level") || "Beginner");
    setCount(
      parseInt(localStorage.getItem(selectedSport.name + "_InvestCount")) || 0
    );
  }, [selectedSport]);

  const handleInvestClick = () => {
    const lastInvestmentDate = localStorage.getItem(
      selectedSport.name + "_InvestDate"
    );
    const today = new Date().toLocaleDateString();
    if (lastInvestmentDate === today) {
      setShowAside(true);
      setTimeout(() => setShowAside(false), 5000);
      return;
    }
    localStorage.setItem(selectedSport.name + "_InvestDate", today);
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem(selectedSport.name + "_InvestCount", newCount);
      return newCount;
    });
    setShowCount(true);
    setTimeout(() => setShowCount(false), 3000);
  };

  function handleDecrement() {
    setLevel((prevLevel) => {
      let newLevel = prevLevel;
      if (prevLevel === "Intermediate") {
        newLevel = "Beginner";
      } else if (prevLevel === "Advanced") {
        newLevel = "Intermediate";
      }
      localStorage.setItem(selectedSport.name + "_level", newLevel);
      return newLevel;
    });
  }

  function handleIncrement() {
    setLevel((prevLevel) => {
      let newLevel = prevLevel;
      if (prevLevel === "Beginner") {
        newLevel = "Intermediate";
      } else if (prevLevel === "Intermediate") {
        newLevel = "Advanced";
      }
      localStorage.setItem(selectedSport.name + "_level", newLevel);
      return newLevel;
    });
  }
  useEffect(() => {
    setSports(getRandomSports());
  }, []);

  function getRandomSports() {
    const randomSports = sportsData
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return randomSports;
  }

  sports.sort((a, b) => a.name.localeCompare(b.name));

  function handleSelectSport(sport) {
    setSelectedSport(sport);
  }

  function handleNewRoll() {
    setSports(getRandomSports());
    setSelectedSport("");
  }

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
        sports={sports}
        selectedSport={selectedSport}
        onSelectSport={handleSelectSport}
        onNewRoll={handleNewRoll}
        level={level}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onInvestClick={handleInvestClick}
        count={count}
        showCount={showCount}
        showAside={showAside}
      />
    </>
  );
}
