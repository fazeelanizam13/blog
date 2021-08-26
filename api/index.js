import matter from 'gray-matter'
import marked from 'marked'

export async function getAllPostsAndDetails() {
  const context = require.context('../posts', false, /\.md$/)

  let tagsArray = []
  let months = []
  let posts = []

  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../posts/${post}`)

    const { title, date, tags } = matter(content.default).data

    const month = date.split(' ')[0] // -> 'January'
    const year = date.split(' ')[2] // -> '2021'

    tagsArray = tagsArray.concat(tags.split(', ')) // put all tags as strings into one array
    months.push([month, year].join(' '))
    posts.push({
      slug: post.replace('.md', ''),
      title,
      date,
      month: [month, year].join(' '), // -> 'January 2021'
      tags: tags.split(', '), // -> ['react', 'graphql']
    })
  }

  return {
    posts,
    tags: [...new Set(tagsArray)], // array of unique values
    months: [...new Set(months)], // array of unique values
  }
}

export async function getPostBySlug(slug) {
  const content = await import(`../posts/${slug}.md`)

  const meta = matter(content.default)
  const { title, date } = meta.data

  return {
    title,
    date,
    content: marked(meta.content),
  }
}
