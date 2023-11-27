import React from "react";
import classes from "./ContactFormCard.module.css";

function ContactFormCard(props) {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formHeading}>Dictumist elo aioo</div>
      <form className={classes.formMain}>
        <div className={classes.formRow}>
          <div className={classes.halfWidth}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className={classes.halfWidth}>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div className={classes.formRow}>
          <div className={classes.halfWidth}>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className={classes.halfWidth}>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" />
          </div>
        </div>
        <div className={classes.formRow}>
          <div className={classes.fullWidth}>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>

        <div className={classes.buttonParent}>
          <button>Submit the form</button>
        </div>
        <div className={classes.imagesContainer}>
          <div>
            <img src="/Img.jpeg" />
          </div>
          <div>
            <img src="/Img.jpeg" />
          </div>
          <div>
            <img src="/Img.jpeg" />
          </div>
        </div>
        <div className={classes.testimonialCard}>
          <div className={classes.testimonialName}>Name</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            porro accusantium minus nobis ab blanditiis reprehenderit suscipit
            neque, quisquam, qui ullam voluptatibus excepturi? Quas earum quos
            veritatis odio non neque!
          </div>
          <img src="/star5.png" />
        </div>
        <div className={classes.lowerTextBox}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            sequi magni. Architecto, quod cum nobis quia soluta nulla asperiores
            culpa ratione dignissimos et tenetur voluptatem, eligendi inventore
            ducimus itaque rem.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactFormCard;
