import "./activity.css";
import data from "../../data/data.json";
import ActivityCard from "../activityCard/ActivityCard";

export default function Activity({ selectedTimeframe }) {
  return (
    <>
      {/* Activity Cards */}
      <div className="activities-container">
        {data.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            timeframes={activity.timeframes}
            selectedTimeframe={selectedTimeframe}
            imageSrc={`icon-${activity.title
              .toLowerCase()
              .replace(" ", "-")}.svg`}
          />
        ))}
      </div>
    </>
  );
}
