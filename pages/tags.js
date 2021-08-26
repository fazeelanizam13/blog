import React, { useState } from 'react'
import { Layout, ButtonContainer, CardContainer } from '../components'
import { getAllPostsAndDetails } from '../api'

export default function Tags({ tags, posts }) {
  const [tag, setTag] = useState(tags[0])

  return (
    <Layout title='Tags' absolutePath='/tags'>
      <div style={{ display: 'flex' }}>
        <ButtonContainer
          values={tags}
          handleClick={(tagName) => setTag(tagName)}
        />
        <CardContainer posts={posts} selectedValue={tag} type='tag' />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { posts, tags } = await getAllPostsAndDetails()

  return {
    props: {
      tags,
      posts,
    },
  }
}
