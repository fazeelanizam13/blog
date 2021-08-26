import Link from 'next/link'
import styles from '../styles/tags.module.css'

const Button = ({ index, value, handleClick }) => (
  <Link href=''>
    <a className={styles.button}>
      <div key={index} onClick={(e) => handleClick(value)}>
        {value}
      </div>
    </a>
  </Link>
)

export default Button
