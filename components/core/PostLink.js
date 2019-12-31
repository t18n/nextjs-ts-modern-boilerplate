import Link from 'next/link';

const PostLink = ({ post }) => (
  <li>
    <Link href={`/post/[id]`} as={`/post/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  </li>
);

export default PostLink;
