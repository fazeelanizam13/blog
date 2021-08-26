import Link from 'next/link'
import styles from '../styles/bar.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.root} ${styles.stick}`}>
      <div className={`${styles.group} ${styles.iconGroup}`}>
        <Link href='/' as={`${process.env.URL}/`}>
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
        <Link href='/tags' as={`${process.env.URL}/tags`}>
          <a>
            <img
              src='/navbar-icons/tags.png'
              className={styles.icon}
              alt='Tags Icon'
            />
          </a>
        </Link>
        <Link href='/archives' as={`${process.env.URL}/archives`}>
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
