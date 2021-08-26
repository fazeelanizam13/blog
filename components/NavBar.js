import Link from 'next/link'
import styles from '../styles/bar.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.root} ${styles.stick}`}>
      <div className={`${styles.group} ${styles.iconGroup}`}>
        <Link href='/'>
          <a>
            <img
              src='/navbar-icons/home.png'
              className={styles.icon}
              alt='Home Icon'
            />
          </a>
        </Link>
      </div>

      <div className={`${styles.group} ${styles.iconGroup}`}>
        <Link href='/tags'>
          <a>
            <img
              src='/navbar-icons/tags.png'
              className={styles.icon}
              alt='Tags Icon'
            />
          </a>
        </Link>
        <Link href='/archives'>
          <a>
            <img
              src='/navbar-icons/archives.png'
              className={styles.icon}
              alt='Archives Icon'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
