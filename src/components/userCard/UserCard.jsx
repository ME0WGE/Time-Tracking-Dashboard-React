import "./userCard.css";

export default function UserCard({ selectedTimeframe, onTimeframeChange }) {
  const userImage = `image-jeremy.png`;
  const userImageSource = `src/assets/images/${userImage}`;
  const altText = `image of ${userImage}`;

  function handleClick(e) {
    // Get the lowercase text content of the clicked element
    const timeframe = e.target.textContent.toLowerCase();

    // Call the parent component's handler function
    onTimeframeChange(timeframe);

    // Update active class for styling
    const timeframeOptions = document.querySelectorAll(".user-card-body h3");
    timeframeOptions.forEach((option) => {
      option.classList.remove("active");
      option.style.opacity = "0.5";
    });

    e.target.classList.add("active");
    e.target.style.color = "white";
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
          <h3
            id="daily"
            onClick={handleClick}
            className={selectedTimeframe === "daily" ? "active" : ""}
            style={
              selectedTimeframe === "daily"
                ? { color: "white" }
                : { opacity: "0.5" }
            }
          >
            Daily
          </h3>
          <h3
            id="weekly"
            onClick={handleClick}
            className={selectedTimeframe === "weekly" ? "active" : ""}
            style={
              selectedTimeframe === "weekly"
                ? { color: "white" }
                : { opacity: "0.5" }
            }
          >
            Weekly
          </h3>
          <h3
            id="monthly"
            onClick={handleClick}
            className={selectedTimeframe === "monthly" ? "active" : ""}
            style={
              selectedTimeframe === "monthly"
                ? { color: "white" }
                : { opacity: "0.5" }
            }
          >
            Monthly
          </h3>
        </div>
      </div>
    </>
  );
}
