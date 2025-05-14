import "./userCard.css";

export default function UserCard() {
  const userImage = `image-jeremy.png`;
  const userImageSource = `src/assets/images/${userImage}`;
  const altText = `image of ${userImage}`;

  function handleClick(e) {
    e.target.classList.toggle("active");

    {
      e.target.classList.contains("active")
        ? (e.target.style.color = "white")
        : (e.target.style.opacity = "0.5");
    }
  }

  return (
    <>
      <div className="user-card">
        <div className="user-div">
          <div className="user-img-div">
            <img src={userImageSource} alt={altText} />
          </div>
          <div className="user-text-content">
            <p>Report for</p>
            <h1>
              <span id="jeremy">Jeremy</span>
              <span id="robson">Robson</span>
            </h1>
          </div>
        </div>
        <div className="user-card-body">
          <h3 id="daily" onClick={handleClick}>
            Daily
          </h3>
          <h3 id="weekly" onClick={handleClick}>
            Weekly
          </h3>
          <h3 id="monthly" onClick={handleClick}>
            Monthly
          </h3>
        </div>
      </div>
    </>
  );
}
