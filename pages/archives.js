import React, { useState } from 'react'
import { Layout, ButtonContainer, CardContainer } from '../components'
import { getAllPostsAndDetails } from '../api'

export default function Archives({ months, posts }) {
  const [month, setMonth] = useState(months[0])

  return (
    <Layout title='Archives' absolutePath='/archives'>
      <div style={{ display: 'flex' }}>
        <ButtonContainer
          values={months}
          handleClick={(month) => setMonth(month)}
        />
        <CardContainer posts={posts} selectedValue={month} type='month' />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { posts, months } = await getAllPostsAndDetails()

  return {
    props: {
      months,
      posts,
    },
  }
}
