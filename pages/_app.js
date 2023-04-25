import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [sportData, setSportData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupDict, setGroupDict] = useState({});
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [sports, setSports] = useState([]);
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

  const fetchData = async () => {
    try {
      const sportsResponse = await fetch(
        "https://sports.api.decathlon.com/sports?parents_only=true"
      );
      const sportsData = await sportsResponse.json();
      setSportData(sportsData.data);

      const groupsResponse = await fetch(
        "https://sports.api.decathlon.com/groups"
      );
      const groupsData = await groupsResponse.json();
      setGroupData(groupsData.data);

      const groupDict = {};
      groupsData.data.forEach((group) => {
        group.relationships.sports.data.forEach((sportData) => {
          if (!groupDict[group.id]) {
            groupDict[group.id] = [];
          }
          groupDict[group.id].push(sportData.id);
        });
      });
      setGroupDict(groupDict);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function filterSportsByGroupId(groupIds) {
    const filteredSportIds = groupIds.reduce((acc, groupId) => {
      return acc.concat(groupDict[groupId] || []);
    }, []);
    const filteredSports = sportData.filter((sport) => {
      return filteredSportIds.includes(sport.id);
    });
    return filteredSports;
  }

  const handleSelectChange = (e) => {
    const selectedGroupId = parseInt(e.target.value);
    if (selectedGroups.includes(selectedGroupId)) {
      setSelectedGroups(
        selectedGroups.filter((groupId) => groupId !== selectedGroupId)
      );
    } else if (selectedGroups.length < 5) {
      setSelectedGroups([...selectedGroups, selectedGroupId]);
    }
    console.log(filteredSports);
  };

  const filteredGroups = groupData.filter((group) =>
    [
      "Athletics",
      "Combat sports",
      "Water Aerobics",
      "Adventure & Travel sports",
      "Cycle sports ",
      "Artistic and dance sports",
      "Strength training",
      "Football Sports",
      "Shooting Sports",
      "Relaxation training",
    ].includes(group.attributes.name)
  );

  const filteredSports = filterSportsByGroupId(selectedGroups);

  useEffect(() => {
    setLevel(
      localStorage.getItem(selectedSport.attributes?.name + "_level") ||
        "Beginner"
    );
    setCount(
      parseInt(
        localStorage.getItem(selectedSport.attributes?.name + "_InvestCount")
      ) || 0
    );
  }, [selectedSport]);

  function getRandomSports(filteredSports) {
    const randomSports = filteredSports
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return randomSports;
  }

  function handleNewRoll() {
    setSports(getRandomSports(filteredSports));
    setSelectedSport("");
    console.log(sports);
  }

  const handleInvestClick = () => {
    const lastInvestmentDate = localStorage.getItem(
      selectedSport.attributes.name + "_InvestDate"
    );
    const today = new Date().toLocaleDateString();
    if (lastInvestmentDate === today) {
      setShowAside(true);
      setTimeout(() => setShowAside(false), 5000);
      return;
    }
    localStorage.setItem(selectedSport.attributes.name + "_InvestDate", today);
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem(
        selectedSport.attributes.name + "_InvestCount",
        newCount
      );
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
      localStorage.setItem(selectedSport.attributes.name + "_level", newLevel);
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
      localStorage.setItem(selectedSport.attributes.name + "_level", newLevel);
      return newLevel;
    });
  }

  function handleSelectSport(sport) {
    setSelectedSport(sport);
    console.log("selectedSport", selectedSport);
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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        formData={formData}
        onChange={handleInputChange}
        handleChange={handleChange}
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
        onSelectChange={handleSelectChange}
        selectedGroups={selectedGroups}
        filteredGroups={filteredGroups}
        sports={sports}
      />
    </>
  );
}
