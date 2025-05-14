import { useState } from "react";
import "./activityCard.css";

export default function ActivityCard({
  title,
  timeframes,
  imageSrc,
  selectedTimeframe,
}) {
  // div.activity-card path to image using prop
  const imageSource = `src/assets/images/${imageSrc}`;
  const altText = `image of ${title}`;

  // div.activity-title title & path to icon
  const activityTitle = title;
  const ellipsisIcon = `src/assets/images/icon-ellipsis.svg`;
  const ellipsisAltText = "image of ellipsis icon";

  // Get current timeframe data
  const current = timeframes[selectedTimeframe].current;
  const previous = timeframes[selectedTimeframe].previous;

  // Format display strings
  const currentTimeFrameTime = `${current}hrs`;

  // Set appropriate text based on selected timeframe
  let timeFrameText;

  if (selectedTimeframe === "daily") {
    timeFrameText = "Yesterday - ";
  } else if (selectedTimeframe === "weekly") {
    timeFrameText = "Last Week - ";
  } else {
    timeFrameText = "Last Month - ";
  }

  const previousTimeFrameTime = `${previous}hrs`;

  let bgColor = "";

  if (title === "Work") {
    bgColor = "blue";
  }
  switch (title) {
    case "Work":
      bgColor = "hsl(15, 100%, 70%)";
      break;
    case "Play":
      bgColor = "hsl(195, 74%, 62%)";
      break;
    case "Study":
      bgColor = "hsl(348, 100%, 68%)";
      break;
    case "Exercise":
      bgColor = "hsl(145, 58%, 55%)";
      break;
    case "Social":
      bgColor = "hsl(264, 64%, 52%)";
      break;
    case "SelfCare":
      bgColor = "hsl(43, 84%, 65%)";
      break;

    default:
      break;
  }

  return (
    <>
      <div className="activity-card" style={{ backgroundColor: bgColor }}>
        <div className="img-div">
          <img src={imageSource} alt={altText} />
        </div>
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
