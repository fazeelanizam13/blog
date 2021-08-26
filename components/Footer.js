import Link from "next/link";
import styles from "../styles/bar.module.css";

export default function Footer() {
  return (
    <div className={`${styles.root} ${styles.footerMobile}`}>
      <div className={`${styles.group} ${styles.textGroup}`}>
        <span>© 2021 Fazeela Nizam</span>
      </div>

      <div className={`${styles.group} ${styles.textGroup}`}>
        <Link href="https://fazeelanizam13.github.io/home/">
          <a target="_blank">Portfolio</a>
        </Link>
        <Link href="https://www.linkedin.com/in/fazeelanizam">
          <a target="_blank">LinkedIn</a>
        </Link>
        <Link href="https://github.com/fazeelanizam13">
          <a target="_blank">GitHub</a>
        </Link>
      </div>
    </div>
  );
}
