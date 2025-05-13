import "./activityCard.css";

export default function ActivityCard({ imageSrc }) {
  //div.activity-card path to image using prop
  //div.activity-card alternative text
  const imageSource = `src/assets/images/${imageSrc}`;
  const altText = "image of " + imageSrc;

  // div.activity-title title & path to icon
  // TODO: JSON.title.value
  const activityTitle = "Work";
  const ellipsisIcon = `src/assets/images/icon-ellipsis.svg`;
  const ellipsisAltText = "image of ellipsis icon";

  // Display current timeframe
  // TODO: JSON.timeframes.weekly.current.value + "hrs"
  const currentTimeFrameTime = `32hrs`;
  // TODO: JSON.timeframes.weekly.previous.value + "hrs"
  // Display previous timeframe
  const previousTimeFrameTime = `36hrs`;
  const timeFrameDate = `Last Week - `;

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
            <h3>{timeFrameDate + previousTimeFrameTime}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
