import { useEffect, useState } from 'react';
import PostLink from '~/components/core/PostLink';

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getShows() {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=x-men');
      const data = await res.json();

      console.log(`Show data fetched. Count: ${data.length}`);

      setPosts(await data.map(entry => entry.show));
    };

    getShows();
  }, [setPosts]);

  return (
    <ul>
      {posts && posts.map(post => <PostLink key={post.id} post={post} />)}
    </ul>
  );
};
