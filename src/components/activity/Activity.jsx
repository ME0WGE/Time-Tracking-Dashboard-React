import "./activity.css";
import data from "../../data/data.json";
import ActivityCard from "../activityCard/ActivityCard";

export default function Activity() {
  return (
    <>
      {/* Activity Cards */}
      {/* <ActivityCard imageSrc="icon-work.svg" /> */}
      {data.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          timeframes={activity.timeframes}
          imageSrc={`icon-${activity.title
            .toLowerCase()
            .replace(" ", "-")}.svg`}
        />
      ))}
    </>
  );
}
