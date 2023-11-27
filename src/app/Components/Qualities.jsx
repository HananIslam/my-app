import classes from "./Qualities.module.css"

function Qualities(props) {
  return (
    <div className={classes.QualitiesMainContainer}>
      <div className={classes.qualities}>
        <div><img src="/Img.jpeg"/></div>
        <div>
          <div className={classes.heading}>Heading</div>
          <div className={classes.description}>Description</div>

        </div>
      </div>
      <div className={classes.qualities}>
        <div><img src="/Img.jpeg"/></div>
        <div>
          <div className={classes.heading}>Heading</div>
          <div className={classes.description}>Description</div>

        </div>
      </div> <div className={classes.qualities}>
        <div><img src="/Img.jpeg"/></div>
        <div>
          <div className={classes.heading}>Heading</div>
          <div className={classes.description}>Description</div>

        </div>
      </div>
    </div>
  );
}

export default Qualities;
