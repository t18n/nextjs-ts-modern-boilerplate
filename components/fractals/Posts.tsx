import { useEffect, useState } from 'react';
import PostLink from '~/components/core/PostLink';
import { FunctionComponent } from 'react';

const Blog: FunctionComponent = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getShows = async () => {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=x-men');
      const data = await res.json();

      console.log(`Show data fetched. Count: ${data.length}`);

      setPosts(await data.map(entry => entry.show));
    };

    getShows();
  }, [setPosts]);

  return <ul>{posts && posts.map(post => <PostLink key={post.id} post={post} />)}</ul>;
};

export default Blog;
