import "./userCard.css";

export default function UserCard() {
  const userImage = `image-jeremy.png`;
  const userImageSource = `src/assets/images/${userImage}`;
  const altText = `image of ${userImage}`;

  return (
    <>
      <div className="user-card">
        <div className="user-div">
          <div className="user-img-div">
            <img src={userImageSource} alt={altText} />
          </div>
          <p>Report for</p>
          <h1>
            Jeremy
            <br />
            Robson
          </h1>
        </div>
        <div className="user-card-body">
          <h3 id="daily">Daily</h3>
          <h3 id="weekly">Weekly</h3>
          <h3 id="monthly">Monthly</h3>
        </div>
      </div>
    </>
  );
}
