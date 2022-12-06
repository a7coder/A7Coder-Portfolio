import styles from "../styles/my-btn.module.css";
import Link from "next/link";
export default function Button({ children, url,onClick }) {
  
  
  return (
    <div className={styles.my_btn } onClick={onClick}>
      <Link href={url} >
        {children}
      </Link>
    </div>
  );
}
