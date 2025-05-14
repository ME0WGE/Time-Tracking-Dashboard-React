import "./activity.css";
import data from "../../data/data.json";
import ActivityCard from "../activityCard/ActivityCard";
import UserCard from "../userCard/UserCard";

export default function Activity({ selectedTimeframe }) {
  return (
    <>
      {/* Activity Cards */}
      <div className="activities-container">
        <div className="userCard-div">
          <UserCard />
        </div>
        <div className="activityCard-div">
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
      </div>
    </>
  );
}
