import { Button } from './'
import styles from '../styles/tags.module.css'

const ButtonContainer = ({ values, handleClick }) => (
  <div className={styles.tagContainer}>
    {values.map((value, index) => (
      <Button key={index} value={value} handleClick={handleClick} />
    ))}
  </div>
)

export default ButtonContainer
