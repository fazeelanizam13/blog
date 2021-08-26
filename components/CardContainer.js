import { GoUpLink, Card } from '../components'
import styles from '../styles/tags.module.css'

const CardContainer = ({ posts, selectedValue, type }) => (
  <div className={styles.cardContainer}>
    <div className={styles.cards}>
      {posts.map(({ slug, title, date, month, tags }, index) => {
        if (
          (type === 'tag' && tags.includes(selectedValue)) ||
          (type === 'month' && month === selectedValue)
        )
          return (
            <div
              style={{ borderBottom: `1px solid #A6A6A6`, width: '100%' }}
              key={slug}
            >
              <Card key={index} slug={slug} title={title} date={date} />
            </div>
          )
      })}

      <GoUpLink cardCount={posts.length} />
    </div>
  </div>
)

export default CardContainer
