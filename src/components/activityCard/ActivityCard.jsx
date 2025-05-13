import "./activityCard.css";

export default function ActivityCard({ imageSrc }) {
  const imageSource = `src/assets/images/${imageSrc}`;
  const altText = "image of " + imageSrc;

  const activityTitle = "Work";
  const ellipsisIcon = `src/assets/images/icon-ellipsis.svg`;
  const ellipsisAltText = "image of ellipsis icon";

  return (
    <>
      <div className="activity-card">
        <img src={imageSource} alt={altText} />
        <div className="activity-card-body">
          <div className="activity-title">
            {activityTitle}
            <img src={ellipsisIcon} alt={ellipsisAltText} />
          </div>
          <div className="activity-timeframes"></div>
        </div>
      </div>
    </>
  );
}
