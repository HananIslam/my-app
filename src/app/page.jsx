import Heroes from "./Components/Heroes";
import ProductWithReviews from "./Components/ProductWithReviews";
import Qualities from "./Components/Qualities";
import classes from "./page.module.css";
export default function Home() {
  return (
    <div className={classes.parent}>
      <Heroes />
      <Qualities />
      <div className={classes.headingProducts}>
        Pollonentation Tortor
        <br />
        liquete rcht uncees
      </div>
      <div className={classes.productWithReviewsContainer}>
        <ProductWithReviews />
        <ProductWithReviews />
      </div>
    </div>
  );
}
