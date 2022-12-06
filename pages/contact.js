import styles from "../styles/contact.module.css";
import Button from "../components/Button";
function submitHandler(e) {
  e.preventDefault();
  console.log("Submitted", e);
}

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <h1>
          Thanks for taking the time to reach <br /> out. How can I help you
          today?
        </h1>
        <div className={styles.html_form}>
          <form action="#" method="post" onSubmit={submitHandler} className={styles.innerform}>
            <div className={styles.per_info}>
              <div className={styles.name}>
                {" "}
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>
            <div className={styles.msg}>
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" rows="5" required></textarea>
            </div>

            <input type="submit" value="Submit" className={styles.my_btn} />
          </form>
        </div>
      </div>
    </>
  );
}
