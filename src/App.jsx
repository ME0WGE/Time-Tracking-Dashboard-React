import { useState } from "react";
import "./App.css";
import Activity from "./components/activity/Activity";

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState("weekly");

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
  };

  return (
    <>
      {/* User Card */}
      {/* Activity Cards */}
      <Activity selectedTimeframe={activeTimeframe} />
    </>
  );
}

export default App;
