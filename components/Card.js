import Link from "next/link";
import styles from "../styles/card.module.css";

export default function Card({ slug, title, date }) {
  return (
    <div className={styles.root}>
      <Link href={`/posts/${slug}`} as={`${process.env.URL}/posts/${slug}`}>
        <a style={{ width: "100%" }}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{date}</p>
        </a>
      </Link>
    </div>
  );
}
