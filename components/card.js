import styles from "../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Card({children,title,img_url,desc_text,repo_url}) {
  return (
    <>
   
      <div className={styles.card} >
      <Link href={repo_url} className={styles.card_link}>
        <Image src={img_url} width={200} height={300} alt={title} title={title}/>
        <div className={styles.text}>
        <h2>{title}</h2>
        <p>{desc_text}</p>
        </div>
        </Link>
      </div>
      
    </>
  );
}
