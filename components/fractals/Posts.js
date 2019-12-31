import PostLink from '../core/PostLink';

const posts = [
  {
    id: "richest-man-in-babylon",
    title: "The richest man in Babylon",
  },
  {
    id: "find-your-why",
    title: "Find your why"
  },
  {
    "id": "win-friends-and-influence-people",
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