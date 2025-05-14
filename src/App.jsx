import "./App.css";
import { useState } from "react";
import Activity from "./components/activity/Activity";
import UserCard from "./components/userCard/UserCard";

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState("weekly");

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
  };

  return (
    <>
      {/* Activity Cards */}
      <Activity selectedTimeframe={activeTimeframe} />
    </>
  );
}

export default App;
