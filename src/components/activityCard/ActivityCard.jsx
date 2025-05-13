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
