import classes from "./ReviewCard.module.css";
function ReviewCard(props) {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.profileImageContainer}>
        <img src="/profile.jpeg" />
      </div>
      <div className={classes.otherContentContainer}>
        <div className={classes.heading}>Heading</div>
        <div className={classes.description}>Description</div>
        <div className={classes.starsContainer}>
          <img src="/star5.png" />
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
