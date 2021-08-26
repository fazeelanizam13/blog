import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Prism from "prismjs";
import { Layout } from "../../components";
import { getPostBySlug, getAllPostsAndDetails } from "../../api";
import postStyles from "../../styles/post.module.css";
import cardStyles from "../../styles/card.module.css";

export default function Post(props) {
  const {
    query: { slug },
  } = useRouter();
  const { title, date, content } = props.post;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout title={title} absolutePath={`/post/${slug}`}>
      <div className={postStyles.root}>
        <div className={cardStyles.root}>
          <div className={postStyles.title}>{title}</div>
          <div className={postStyles.date}>{date}</div>
        </div>

        <div className={cardStyles.root}>
          <div
            className={postStyles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // need to get the most recent ones only
  const { posts } = await getAllPostsAndDetails();

  return {
    props: {
      post: await getPostBySlug(context.params.slug),
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPostsAndDetails();
  let paths = [];

  paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
