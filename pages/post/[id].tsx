import fetch from 'isomorphic-unfetch';
import Layout from '~/components/fractals/Layout';
import { NextPage, NextPageContext } from 'next';

interface Image {
  medium: string;
}

interface Post {
  name: string;
  summary: string;
  image: Image;
}

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <h1>{post.name}</h1>
      <p>{post.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={post.image.medium} />
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
Post.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { post: show };
};

export default Post;
