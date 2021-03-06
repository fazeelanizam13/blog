import Link from 'next/link'
import styles from '../styles/bar.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.root} ${styles.stick}`}>
      <div className={`${styles.group} ${styles.iconGroup}`}>
        <Link href={`${process.env.URL}/`}>
          <a>
            <img
              src={`${process.env.URL}/navbar-icons/home.png`}
              className={styles.icon}
              alt='Home Icon'
            />
          </a>
        </Link>
      </div>

      <div className={`${styles.group} ${styles.iconGroup}`}>
        <Link href={`${process.env.URL}/tags`}>
          <a>
            <img
              src={`${process.env.URL}/navbar-icons/tags.png`}
              className={styles.icon}
              alt='Tags Icon'
            />
          </a>
        </Link>
        <Link href={`${process.env.URL}/archives`}>
          <a>
            <img
              src={`${process.env.URL}/navbar-icons/archives.png`}
              className={styles.icon}
              alt='Archives Icon'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
