import Link from 'next/link';

const PostLink = ({ post }) => (
  <li>
    <Link href={`/post/[id]`} as={`/post/${post.id}`}>
      <a>{post.name}</a>
    </Link>
  </li>
);

export default PostLink;
