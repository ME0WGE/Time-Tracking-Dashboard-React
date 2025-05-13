import "./activityCard.css";
import { useState } from "react";

export default function ActivityCard({ title, timeframes, imageSrc }) {
  // This tracks which timeframe is selected - default: "weekly"
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("weekly");

  //div.activity-card path to image using prop
  //div.activity-card alternative text
  const imageSource = `src/assets/images/${imageSrc}`;
  const altText = `image of ${title}`;

  // div.activity-title title & path to icon
  const activityTitle = title;
  const ellipsisIcon = `src/assets/images/icon-ellipsis.svg`;
  const ellipsisAltText = "image of ellipsis icon";

  // Get current timeframe data
  const current = timeframes[selectedTimeFrame].current;
  const previous = timeframes[selectedTimeFrame].previous;

  // Display current timeframe data
  const currentTimeFrameTime = `${current}hrs`;

  // Display previous timeframe data
  const previousTimeFrameTime = `${previous}hrs`;

  let timeFrameText;

  if (selectedTimeFrame === "daily") {
    timeFrameText = "Yesterday - ";
  } else if (selectedTimeFrame === "weekly") {
    timeFrameText = "Last Week - ";
  } else {
    timeFrameText = "Last Month - ";
  }

  return (
    <>
      <div className="activity-card">
        <img src={imageSource} alt={altText} />
        <div className="activity-card-body">
          <div className="activity-title">
            {activityTitle}
            <img src={ellipsisIcon} alt={ellipsisAltText} />
          </div>
          <div className="activity-timeframes">
            <h1>{currentTimeFrameTime}</h1>
            <h3>{timeFrameText + previousTimeFrameTime}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
