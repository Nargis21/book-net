import Banner from "@/components/banner/Banner";
import LatestBlogs from "@/components/latestPosts/LatestPost";

import React from 'react';

const HomePage = async () => {

  const res = await fetch('http://localhost:5000/posts', {
    next: {
      revalidate: 30
    }
  })

  const posts = await res.json()
  return (
    <div>
      <Banner />
      <LatestBlogs posts={posts} />
    </div>
  );
};

export default HomePage;
