import { Link } from "react-router-dom";
import styles from "./TitleWithLine.module.css";

export default function TitleWithLine({ title, linkText, linkTo }) {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>{title}</h2>
      <div className={styles.RightSideContainer}>
        <div className={styles.Line} />
        <Link to={linkTo}>{linkText}</Link>
      </div>
    </div>
  );
}
