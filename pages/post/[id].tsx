import fetch from 'isomorphic-unfetch';
import Layout from '~/components/fractals/Layout';

export default function Post(props) {
  return (
    <Layout>
      <h1>{props.post.name}</h1>
      <p>{props.post.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.post.image.medium} />
    </Layout>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { post: show };
};