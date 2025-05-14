import "./App.css";
import { useState } from "react";
import Activity from "./components/activity/Activity";

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState("weekly");

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
  };

  return (
    <>
      {/* User & Activity Cards */}
      <Activity
        selectedTimeframe={activeTimeframe}
        handleTimeframeChange={handleTimeframeChange}
      />
    </>
  );
}

export default App;
