import React, { useEffect, useRef } from "react";
import { Layout, Card } from "../components";
import { getAllPostsAndDetails } from "../api";

export default function Home({ posts }) {
  const cardContainer = useRef();

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "5%",
  };

  return (
    <Layout title="Home" absolutePath="/">
      <div style={styles} ref={cardContainer}>
        {posts.map(({ slug, title, date }) => (
          <div
            style={{ borderBottom: `1px solid #A6A6A6`, width: "100%" }}
            key={slug}
          >
            <Card slug={slug} title={title} date={date} key={slug} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts } = await getAllPostsAndDetails();

  return {
    props: {
      posts,
    },
  };
}
