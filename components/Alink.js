import styles from "../styles/alink.module.css";
import Link from "next/link";
export default function Alink({ children, url,onClick }){
    return (
        <div className={styles.alink} onClick={onClick}>
          <Link href={url} >
            {children}
          </Link>
        </div>
      );
}