import "./activityCard.css";

export default function ActivityCard({ imageSrc }) {
  const imageSource = `src/assets/images/${imageSrc}`;
  const altText = "image of" + imageSrc;
  return (
    <>
      <div className="activity-card">
        <img src={imageSource} alt={altText} />
      </div>
    </>
  );
}
