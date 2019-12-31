import PostLink from '../core/PostLink';

const posts = [
  {
    title: "The richest man in Babylon",
  },
  {
    title: "Find your why"
  },
  {
    title: "How to win friends and influence people"
  }
];

export default function Blog() {
  return (
    <ul>
      {posts.map(post => <PostLink post={post} />)}
    </ul>
  );
};