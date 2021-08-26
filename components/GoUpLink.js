import Link from 'next/link'
import styles from '../styles/tags.module.css'

const GoUpLink = (cardCount) => {
  const goUp = () => {
    document.body.scrollTop = 0 // Safari
    document.documentElement.scrollTop = 0 // Chrome, Firefox, IE and Opera
  }

  return cardCount > 5 ? (
    <Link href=''>
      <a className={styles.goUpLink}>
        <div className={styles.goUpButton} onClick={goUp}>
          Go Up!
        </div>
      </a>
    </Link>
  ) : null
}

export default GoUpLink
