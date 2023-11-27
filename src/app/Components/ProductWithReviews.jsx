import classes from "./ProductWithReviews.module.css";
import ReviewCard from "./ReviewCard";
function ProductWithReviews(props) {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.productTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div className={classes.imageContainer}>
        <img src="/Img.jpeg" alt="" />
      </div>
      <div className={classes.reviewsContainer}>
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className={classes.productDesription}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vel
        laudantium, vero sequi consequuntur aut! Iusto, adipisci cupiditate?
        Similique quos ex nisi, provident delectus perspiciatis itaque possimus
        ab asperiores assumenda!
      </div>
      <div className={classes.buttonContainer}>
        <button>VIEW</button>
      </div>
    </div>
  );
}

export default ProductWithReviews;
